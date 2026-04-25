/**
 * CONFIG.JS - Application Configuration & Constants
 * ─────────────────────────────────────────────────────────────────────────
 * Centralized configuration, constants, and seed data.
 * All values are frozen to prevent accidental mutations.
 */

const CONFIG = {
  /**
   * Available rooms at the lake house
   */
  ROOMS: Object.freeze([
    'Guest Room 1',
    'Guest Room 2',
    'Guest Room 3',
    'Bunk Room',
    'No Preference'
  ]),

  /**
   * Known guests for quick selection
   */
  KNOWN_GUESTS: Object.freeze([
    'Alec',
    'Jess',
    'Clay & Nico',
    'Mitch & Haley',
    'Sylvia',
    'Other…'
  ]),

  /**
   * Guest color palette - maps guests to branded colors
   */
  GUEST_COLORS: Object.freeze({
    'Alec': '#e17055',
    'Jess': '#0984e3',
    'Clay & Nico': '#00b894',
    'Mitch & Haley': '#6c5ce7',
    'Sylvia': '#e67e22'
  }),

  /**
   * Fallback colors for unknown/custom guests
   */
  FALLBACK_COLORS: Object.freeze([
    '#636e72',
    '#b2bec3',
    '#fd79a8',
    '#55efc4',
    '#fab1a0',
    '#74b9ff'
  ]),

  /**
   * Seed bookings for initial data
   */
  SEED_BOOKINGS: Object.freeze([
    {
      id: 's1',
      guest: 'Alec',
      arrival: '2026-04-27',
      departure: '2026-05-01',
      nights: 4,
      room: 'Guest Room 1',
      hasExtras: true,
      numExtras: 2,
      extraRooms: 'Bunk Room',
      extraGuests: [
        { name: '(child)', room: 'Bunk Room', notes: '' },
        { name: '(child)', room: 'Bunk Room', notes: '' }
      ],
      notes: 'Bringing the kids'
    },
    {
      id: 's2',
      guest: 'Clay & Nico',
      arrival: '2026-05-03',
      departure: '2026-05-07',
      nights: 4,
      room: 'Guest Room 2',
      hasExtras: false,
      numExtras: 0,
      extraRooms: '',
      extraGuests: [],
      notes: ''
    },
    {
      id: 's3',
      guest: 'Sylvia',
      arrival: '2026-05-10',
      departure: '2026-05-13',
      nights: 3,
      room: 'Guest Room 3',
      hasExtras: false,
      numExtras: 0,
      extraRooms: '',
      extraGuests: [],
      notes: 'Arriving Friday evening'
    }
  ]),

  /**
   * Storage key for bookings in localStorage
   */
  STORAGE_KEY: 'lakeBookings',

  /**
   * Month names for formatting
   */
  MONTH_NAMES_LONG: Object.freeze([
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]),

  /**
   * Month names abbreviated
   */
  MONTH_NAMES_SHORT: Object.freeze([
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]),

  /**
   * Day names
   */
  DAY_NAMES: Object.freeze([
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ]),

  /**
   * Day names abbreviated
   */
  DAY_NAMES_SHORT: Object.freeze([
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
  ])
};

Object.freeze(CONFIG);
