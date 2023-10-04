export default {
  template: `
    <button :class="{
        'border rounded px-5 py-2 disabled:cursor-not-allowed' : true,
        'bg-gray-200 hover:bg-gray-400':type === 'muted',
        'bg-purple-200 hover:bg-purple-400':type === 'primary',
        'bg-blue-200 hover:bg-blue-400':type === 'secondary',
        'is-loading' : processing
    }" 
    :disabled="processing"><slot/></button>
    `,
  // mounted() {
  //   alert("hello world!");
  // },

  props: {
    type: {
      type: String,
      default: "secondary",
    },

    processing: {
      type: Boolean,
      default: true,
    },
  },

  //   data() {
  //     return {
  //       processing: true,
  //     };
  //   },
};
