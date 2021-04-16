<template> 
    
    <Form
        id="app"
        @submit="submit"
        :validation-schema="schema"
        action="#"
        method="post"
        class="w-full md:w-11/12 lg:w-1/2 bg-white rounded-lg flex items-center justify-center flex-col shadow-lg p-6 my-12 divide-y-2"
    >

        <div class="text-left w-full py-4 flex items-center"  >
            <label for="title" class="mr-4">Title:</label>
            <Field
                id="title"
                type="text"
                name="title"
                placeholder="Title"
                class="border-solid w-full p-1 outline-none"
            />
        </div>

        <div class="text-left py-6 flex flex-col w-full">
            <label  class="my-2 text-left">Body: </label>
            <textarea
                type="textarea"
                name="postBody" 
                cols="40" rows="8" 
                class="form-textarea border rounded py-4" 
            >
            </textarea>
            <ErrorMessage name="postBody" class="text-red-600"/>
        </div>

        <div class="py-6 flex flex-col align-left">
            <div>
                <label for="pubDate" class="mr-4">Publish Date</label>
                <Field
                    name="pubDate"
                    type="date"
                    id="pubDate"
                    class="border rounded"
                />

            </div>
            <ErrorMessage name="pubDate" class="text-red-600"/>
        </div>

        <div class="mb-4">
            <button
             type="submit" class="w-24 py-2 rounded-full bg-blue-600 text-gray-100 hover:bg-blue-800 focus:outline-none">Submit</button>
        </div>

    </Form>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import {object,date,string} from 'yup';
let dat = new Date();
dat = dat.setDate(dat.getDate() - 1);
export default {
    components: {
        Form,
        Field,
        ErrorMessage
    },
    setup()  {
    const  schema = object().shape({ 
        presentDate: date().default(() => new Date()),
        title: string().required().min(5),
        // postBody: string().required().min(320, "Post must be at least 320 characters"),
        pubDate: date().min(new Date(dat),'Date must be that of at least today')
    })
    console.log(schema)
    const onSubmit = values => {
        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));
    }

    return {
        schema,
        onSubmit
    };
  }
}
</script>