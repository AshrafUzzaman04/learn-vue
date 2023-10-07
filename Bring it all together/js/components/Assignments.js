import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },
  template: `
  <section class="space-y-3">  
    <assignment-list :assignments="filters.inprogress" title="All Assignment"></assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed assignments"></assignment-list>

    <form @submit.prevent="add">
    <div class="border border-gray-600">  
      <input type="text" v-model="addAssignment" placeholder="Add Assignment" class="text-black p-2 outline-0" />
      <button type="submit" class="bg-gray-100 font-bold text-black p-2 border-l">Add</button>
    </div>
    </form>
  </section>
    `,

  data() {
    return {
      assignments: [
        { name: "Ict Practical", complete: false, id: 1 },
        { name: "Statistic Practical", complete: false, id: 2 },
        { name: "Cemistry Practical", complete: false, id: 3 },
      ],

      addAssignment: "",
    };
  },
  computed: {
    inprogressassignments() {
      return this.assignments.filter((assignment) => !assignment.complete);
    },
    completedassignments() {
      return this.assignments.filter((assignment) => assignment.complete);
    },

    filters() {
      return {
        inprogress: this.assignments.filter(
          (assignment) => !assignment.complete
        ),
        completed: this.assignments.filter((assignment) => assignment.complete),
      };
    },
  },

  methods: {
    add() {
      if (this.addAssignment != "") {
        this.assignments.push({
          name: this.addAssignment,
          complete: false,
          id: this.assignments.length + 1,
        });

        this.addAssignment = "";
      } else {
        alert("Please Enter a assignment name!");
      }
    },
  },
};
