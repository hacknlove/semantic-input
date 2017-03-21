# semantic-input

## use:

### Template:
    {{> input name="foo" class="bar buz"}}

where: `name`, and `class` are optionals

* `name` sets the name of the `<input type="file"`
* `class` adds some clases to the `<div class="field">` wrapper

### Events:

    Template.yourtemplate.events({
        'fileloaded input[name=foo]': function (event, instance, text) {
          // file has been loaded
          // text = readed file content
        },
        'cancel input[name=foo]': function (event, instance) {
          // user has canceled)
        }
    })

### Data:
    $('input[name=foo]').data('text') => readed file content
