export type SeasonId = "winter" | "summer" | "fall";

/**
 * Single source of truth for the hero's season scene. Adjust these values to
 * retune the whole widget — nothing else needs to change.
 */
export const SEASON_CLOCK_CONFIG = {
  /** Order the seasons rotate through. */
  seasonOrder: ["winter", "summer", "fall"] as SeasonId[],
  /** How long each season scene stays on screen before rotating. */
  cycleMs: 4000,
};
