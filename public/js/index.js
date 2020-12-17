'use strict';



$(document).ready(function (){
    console.log('testing');
});

function submitJob (req, res, next) {
    console.log('submitted jenkins job');
    // jenkins.build_with_params('job-in-jenkins', function(err, data) {
    //     if (err){ 
    //         return console.log(err); 
    //     } else {
    //         console.log('data-----',data);
    //         return false;
    //     }
    // });
    
}