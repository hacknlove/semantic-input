/* globals
  Template
  FileReader
*/

Template.inputText.events({
  'click *': function (event, template) {
    if (template.$(event.currentTarget).is('[type=file]')) {
      return
    }
    template.$('input[type=file]').click()
  },
  'change input[type=file]': function (event, instance) {
    var hidden = instance.$('input.input')

    var file = event.currentTarget.files[0]

    if (!file) {
      hidden.val('')
      return hidden.trigger('change')
    }

    var reader = new FileReader()

    reader.onload = function (e) {
      hidden.val(e.target.result)
      return hidden.trigger('change', e.target.result, file)
    }
    reader.readAsText(file)
  }
})
