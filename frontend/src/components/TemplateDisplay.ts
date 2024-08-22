const response = await fetch(
  "https://66c6eb10732bf1b79fa4941b.mockapi.io/templates/1"
);
const jsonData = await response.json();
const template = jsonData.value;

export default {
  name: "TemplateDisplay",
  data() {
    return {
      flag: "FLAG{this_is_flag}",
    };
  },
  template: `<p>${template}<p/>`,
};
