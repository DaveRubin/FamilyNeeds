const survery = {
  steps: [
    {
      description: 'Page 1',
      questions: [
        {
          type: 'text',
          title: 'Title',
          text: 'this is some text that should go here...',
        },
        {
          id: 0,
          type: 'selection',
          text: 'What is my name?',
          answers: [
            'David',
            'Ruth',
            'Dana',
            'Doron',
          ],
        },
        {
          id: 48,
          type: 'selection',
          text: 'Are you happy?',
          answers: [
            'yes',
            'no',
          ],
        },
        {
          id: 138,
          type: 'selection',
          text: 'Who is my hero?',
          answers: [
            'Captain Amerigos',
            'Tin Man',
            'The Ok Grunt',
            'Bird Mouth',
          ],
        },
      ],
    },
    {
      description: 'Page 2',
      questions: [
        {
          type: 'text',
          title: 'Title',
          text: 'this is some text that should go here...',
        },
        {
          id: 214,
          type: 'selection',
          text: 'What is the best movie in the world?',
          answers: [
            'Toxic Avenger 1',
            'Toxic Avenger 2',
            'Toxic Avenger 3',
            'Toxic Avenger 4',
          ],
        },
        {
          id: 42055,
          type: 'selection',
          text: 'Who is the singer-songwriter in the world?',
          answers: [
            'Avi bitter',
            'Shlomo bracha',
            'Itzik the spider',
            'Black widow',
          ],
        },
      ],
    },
    {
      description: 'Page 3',
      questions: [
        {
          id: 999,
          type: 'selection',
          text: 'What is what?',
          answers: [
            'Who',
            'Where',
            '???',
            '!!!',
          ],
        },
        {
          id: 321150,
          type: 'selection',
          text: 'Last one thing.... why are we doing this?',
          answers: [
            'For king and country',
            'For personal gain',
            'For weight gain',
            'Because if there is no pain... ther is no gain',
          ],
        },
      ],
    },
  ],
};

export default survery;
