import { defineStore, } from 'pinia'
import { useStateStore } from './state'
import patterns from '@/data/patterns'
import references from '@/data/references'

const stateStore = useStateStore()

export const usePatternsStore = defineStore('patterns', {
  state: () => ({
    patterns: patterns,
    references: references,
    groups: [{
      id: "compPot",
      text: "Complementarity Potential"
    }, {
      id: "confidence",
      text: "Confidence & Uncertainty Measures"
    }, {
      id: "xai",
      text: "eXplainable AI (XAI)"
    }, {
      id: "humanCentric",
      text: "Human Centric Approaches"
    }, {
      id: "ml",
      text: "Machine Learning Approaches"
    }]
  }),
  getters: {
    patternGroups() {
      const patternGroups = [];
      for (let group of this.groups) {
        const patterns = this.filteredPatterns.filter((el) => el.group === group.id);
        patternGroups.push({
          ...group,
          patterns: patterns
        });
      }
      return patternGroups;
    },
    filteredPatterns() {
      const filtered = [];

      for (let pattern of this.patterns) {
        if (this.filterPattern(pattern)) {
          filtered.push(pattern)
        }
      }

      filtered.sort(this.sort);

      return filtered;
    }
  },
  actions: {
    filterPattern(pattern) {
      const filters = stateStore.filters;
      const references = pattern.references.map((el) => this.getReference(el.id));

      for (let [filter, filterValue] of Object.entries(filters)) {
        if (filterValue !== undefined) {
          let value = [];
          if (pattern[filter] !== undefined) {
            value = pattern[filter];
          } else {
            for (let ref of references) {
              value = ref[filter] ? value.concat(ref[filter]) : value;
            }
          }

          if (value === undefined || value.length === 0) continue;
          
          if (Array.isArray(filterValue) && filterValue.length > 0 && value.length > 0) {
            if (!this.any(filterValue, value)) {
              return false;
            }
          } else if (Array.isArray(value) && value.length > 0) {
            if (!value.includes(filterValue)) {
              return false;
            }
          } else {
            if (filterValue !== value) {
              return false;
            }
          }
        }
      }

      return true;
    },
    any(array1, array2) {
      for (let el of array1) {
        if (array2.includes(el)) {
          return true;
        }
      }
      return false;
    },
    sort(el1, el2) {
      return this.getMaturity(el2).value - this.getMaturity(el1).value;
    },
    getPattern(id) {
      return this.patterns.find((el) => el.id === id)
    },
    openPattern(id) {
      this.getPattern(id).expanded = true;
    },
    getReference(id) {
      return this.references.find((el) => el.id === id)
    },
    getMaturity(pattern) {
      let noOfRefs = pattern.references
        ? pattern.references.filter((el) => el.proposal === false).length
        : 0;
      switch (noOfRefs) {
        case 0:
          return {
            grade: "Experimental",
            color: "#5E35B1",
            value: 0,
          };
        case 1:
          return {
            grade: "Sufficient",
            color: "#FFB300",
            value: 1,
          };
        case 2:
          return {
            grade: "Good",
            color: "#43A047",
            value: 2
          };
        default:
          return {
            grade: "Excellent",
            color: "#00ACC1",
            value: 3
          };
      }
    },
  }
})