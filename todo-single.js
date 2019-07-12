Vue.component('todo-single', {
    data: function () {
      return {

      }
    },
    props:['text']
    ,
    template: '\
    <li>\
      {{ text }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  '
  })