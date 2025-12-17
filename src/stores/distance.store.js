import { defineStore } from "pinia";

export const useDistanceStore = defineStore("distance", {
  state: () => ({
    kilometers: 0,
  }),

  getters: {
    metersFormatted: (state) => {
      const km = Number(state.kilometers);
      const meters = km * 1000;
      return meters.toFixed(2);
    },

    milesFormatted: (state) => {
      const km = Number(state.kilometers);
      const miles = km * 0.621371;
      return miles.toFixed(4);
    },

    resultColor: (state) => {
      const km = Number(state.kilometers);
      if (km <= 0) return "blue";
      if (km > 0 && km < 5) return "magenta";
      return "red";
    },
  },

  actions: {
    setKilometers(value) {
      if (value === "" || value === null || value === undefined) {
        this.kilometers = 0;
        return;
      }

      const n = Number(value);
      this.kilometers = Number.isNaN(n) ? 0 : n;
    },
  },
});
