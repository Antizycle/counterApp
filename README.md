# Counter App

### Goal
To use JavaScript Closure feature for a practical task

### What it does
User can add new individual Counter elements. Each counter receives its own unique ID that is generated by invoking newId() function that returns function which has enclosed variable available only to that function. That variable is incremented every time when function is called and used to return a new unique id (in the context of this app). Plus each Counter creates a new instance of newCounter() function that returns an object consisting of two methods: 'count' and 'reset' with enclosed private counter variable. First one increments by one each time user clicks on a counter button. Latter one resets counter to zero. Furthermore each counter can be completely removed.
While this method to achieve desired result for this particular task is not the only one, I found it interesting to use Closure technique to have independent from each other counters that can be changed only in one way.