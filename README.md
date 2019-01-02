# FrontEnd Hiring Project

## Approach 
The goal was to build a data table component, by definition a datatable is reusable and needs the capability to display different types of data and be customizable.
  
My approach of creating a datatable component consist of creating a component capable of accepting the columns and the rows of data to be displayed and from there the component will do his work.

The datatable component is able to sort either ascending or descending and show rows of data with minimal configuration.  
Basically, the component needs to be passed two props: 

* columns:

```javascript
    [
        {
            header: String, //Header that will be displayed in the column.
            field: String, // field that will be displayed in the rows, will read from objects in the rows prop.
            isSortable: Boolean, //Optional, adds an icon to the header to show the table can be sorted by this field.
            isEditable: Boolean //Optional, adds a button to the specified field to allow edition, on save emits an event that needs to handled by the end user.
        }
    ]
```

* rows:
```javascript
    {Object | Array } //Accept and Object or an Array containing the rows of data to be displayed, each row must have the [field]s defined in the columns Object, if the prop is of Object type, each key in the object will be taken as a row of data. For arrays each element will be used as a row.
```
## Deployment method
The front end was built with VueJS and Vue CLI, the deployment is made to an S3 bucket with a plugin for Vue CLI called [s3-deploy](https://github.com/multiplegeorges/vue-cli-plugin-s3-deploy). To run the deployment the following commands must be used:
```
$ npm install
$ npm run build
$ npm run deploy
```
## Questions

* __How long did you spend on the test? Would you do anything differently if you had more time?__
I worked on this project around two hours daily for 4 days (~8 hours to complete). If given more time there would be plenty of improvements to add to the datatable e.g.: Allow filtering and searching, add pagination, make the datatable accept a callback to be able to fetch more data when paginating, allow for each column to treat values with different data types (By default all fields are treated as strings) etc.

* __In what ways would you adapt your component so that it could be used in many different scenarios where a data table is required?__
The main change i would make to the component so it can be more reusable would be adding slots to each section of the table (thead, tbody, caption, caption, footer, etc) so the end user can choose how to customize the look and content of each of those sections if the defaults don't meet the expectation.

* __What is your favorite CSS property? Why?__ My favorite CSS property has to be transition because it can be used to create small transitions between states in an easy way.

* __What is your favorite modern Javascript feature? Why?__ For my favorite modern Javascript feature, i'm torn between Object destructuring and spread operator because it allows me to pack and unpack values from arrays and/or objects in an easy way.

* __What is your favorite third-party Vue.js library? Why?__ My favorite third party Vue.js library is Vuex, because it allows for really easy and enjoyable state management. If it has to be outside the core of Vue.js i would say it is Buefy because i just love Bulma.css
