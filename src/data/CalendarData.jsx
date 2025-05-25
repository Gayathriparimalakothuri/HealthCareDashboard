const mockCalendar = {
    month: 'October 2021',
    days: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    dates: ['25', '26', '27', '28', '29', '30', '31'],
    slots: {
      Mon: ['10:00', '11:00', '12:00'],
      Tues: ['08:00', '09:00', '10:00'],
      Wed: ['12:00', '13:00','-'],
      Thurs: ['10:00', '11:00','-'],
      Fri: ['14:00', '16:00','-'],
      Sat: ['12:00', '14:00', '15:00'],
      Sun: ['09:00', '10:00', '11:00']
    },
    highlightedSlots: ['09:00', '11:00', '12:00']
  };

  export default mockCalendar;