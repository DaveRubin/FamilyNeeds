const getItem = (id) => ({
  title: `Title for item ${id} `,
  description: `Some description ${id} `,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ante gravida, volutpat mauris vitae, tempor lorem. Quisque dignissim rhoncus dui, sit amet lobortis nunc porttitor et. Aenean aliquam mi ut felis laoreet, et venenatis sem efficitur. Nulla a pulvinar ante, eu mollis justo. Morbi eu aliquet tortor, nec scelerisque justo. Integer cursus ante et ex ultrices, id rhoncus augue dignissim. In hac habitasse platea dictumst. Curabitur vulputate, lorem at scelerisque pretium, leo purus luctus urna, id dictum nulla mi id neque. Donec accumsan ullamcorper magna, quis semper dolor tempor sit amet.',
});

const db = {
  resultId1: getItem(1),
  resultId2: getItem(2),
  resultId3: getItem(3),
  resultId4: getItem(4),
  resultId5: getItem(5),
};

export default db;
