export default {
    methods: {
        groupArray(xs, key) {
            return xs.reduce(function(rv, x) {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
              }, {});            
        }
    }
}
