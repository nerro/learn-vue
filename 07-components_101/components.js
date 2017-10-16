Vue.component('item', {
  template: '<h3><slot></slot></h3>'
});

new Vue({
  el: '#root',
});
