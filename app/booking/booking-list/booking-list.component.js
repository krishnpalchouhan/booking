function bookingListCtrl() {
}
module.exports = {
  template: require('./booking-list.html'),
  controller: bookingListCtrl,
  bindings: {
    bookings: '='
  }
}


function bookingListCtrl($scope,myJson) {
    
    $scope.message = 'test';
    console.log($scope.movies);
    $scope.select =function(column){
       // console.log(column);
        column.isSelected=!column.isSelected;
    };

    $scope.rows={  
 "a":[  
        {  
           "id":"A1",
           "isSelected":true,                        
        },{  
           "id":"A2",
           "isSelected":true,                        
        },
        {  
           "id":"A3",
           "isSelected":false,                        
        },
        {  
           "id":"A4",
           "isSelected":false,                        
        },
        {  
           "id":"A5",
           "isSelected":false,                        
        },
        {  
           "id":"A6",
           "isSelected":false,                        
        },
        {  
           "id":"A7",
           "isSelected":false,                        
        },
        {  
           "id":"A8",
           "isSelected":false,                        
        },
        {  
           "id":"A9",
           "isSelected":false,                        
        },
        {  
           "id":"A10",
           "isSelected":false,                        
        }

  ],
  "b":[  
        {  
           "id":"B1",
           "isSelected":true,                        
        },{  
           "id":"B2",
           "isSelected":false,                        
        },
        {  
           "id":"B3",
           "isSelected":false,                        
        },
        {  
           "id":"B4",
           "isSelected":false,                        
        },
        {  
           "id":"B5",
           "isSelected":false,                        
        },
        {  
           "id":"B6",
           "isSelected":false,                        
        },
        {  
           "id":"B7",
           "isSelected":false,                        
        },
        {  
           "id":"B8",
           "isSelected":false,                        
        },
        {  
           "id":"B9",
           "isSelected":false,                        
        },
        {  
           "id":"B10",
           "isSelected":false,                        
        }

  ],"c":[  
        
{  
           "id":"C1",
           "isSelected":true,                        
        },{  
           "id":"C2",
           "isSelected":false,                        
        },
        {  
           "id":"C3",
           "isSelected":false,                        
        },
        {  
           "id":"C4",
           "isSelected":false,                        
        },
        {  
           "id":"C5",
           "isSelected":false,                        
        },
        {  
           "id":"C6",
           "isSelected":false,                        
        },
        {  
           "id":"C7",
           "isSelected":false,                        
        },
        {  
           "id":"C8",
           "isSelected":false,                        
        },
        {  
           "id":"C9",
           "isSelected":false,                        
        },
        {  
           "id":"C10",
           "isSelected":false,                        
        }
  ],"d":[  
        
  ],"e":[  
        

  ],"f":[  
        

  ],"g":[  
       

  ],"h":[  
     

  ]

};
   
    
}