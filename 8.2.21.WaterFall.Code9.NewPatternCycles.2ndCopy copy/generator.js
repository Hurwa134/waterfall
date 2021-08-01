function generateTriangle(squareRow,squareColumn){

    let oldColor = [];

    //column zero
    if (squareColumn == 0){

      oldColor[0] = pattern[squareRow + 1][0];
      oldColor[1] = pattern[squareRow + 1][1];
      
      if (oldColor[0] == oldColor[1]){
       return oldColor[0];
      } 
       return oldColor[1];
      }

      
    //last column (column on right)
      if (squareColumn == squareNum -1){
      oldColor[0] = pattern[squareRow + 1][squareNum -2];
      oldColor[1] = pattern[squareRow + 1][squareNum -1];
      
      if (oldColor[0] == oldColor[1]){
       return oldColor[0];
      } 
       return oldColor[0];
      }
    
      //columns b/w the left (first) and right (last)
    oldColor[0] = pattern[squareRow + 1][squareColumn-1];
    oldColor[1] = pattern[squareRow + 1][squareColumn];
    oldColor[2] = pattern[squareRow + 1][squareColumn + 1]; 
    
    if((oldColor[2] == oldColor[1]) && (oldColor[0] == oldColor[1]))  {
      return oldColor[0];
       }
    if(oldColor[1] == oldColor[2]) {
      return oldColor[0];
     }
  
    if(oldColor[0] == oldColor[1]){
      return oldColor[2];
     }
     //introducing grey scale
    //  return random(0,255);
  
    a = random(0,255);
    if (a < 127) {
    return 0;
     }
    else {
      return 255;
     }
    }

    function generateVerticals(squareRow,squareColumn){

      return pattern[squareRow + 1][squareColumn];
      
      }

      function generateDiagonal(squareRow,squareColumn){

        let oldColor = [];
    
        //column zero
        if (squareColumn == 0){
    
          oldColor[0] = pattern[squareRow + 1][0];
          oldColor[1] = pattern[squareRow + 1][1];
          
          if (oldColor[0] == oldColor[1]){
           return oldColor[0];
          } 
           return oldColor[1];
          }
    
          
        //last column (column on right)
          if (squareColumn == squareNum -1){
          oldColor[0] = pattern[squareRow + 1][squareNum -2];
          oldColor[1] = pattern[squareRow + 1][squareNum -1];
          
          if (oldColor[0] == oldColor[1]){
           return oldColor[0];
          } 
           return oldColor[0];
          }
        
          //columns b/w the left (first) and right (last)
        oldColor[0] = pattern[squareRow + 1][squareColumn-1];
        oldColor[1] = pattern[squareRow + 1][squareColumn];
        oldColor[2] = pattern[squareRow + 1][squareColumn + 1]; 
        
        if((oldColor[2] == oldColor[1]) && (oldColor[0] == oldColor[1]))  {
          return oldColor[0];
           }
        if(oldColor[1] == oldColor[2]) {
          return oldColor[0];
         }
      
        if(oldColor[0] == oldColor[1]){
          return oldColor[0];
         }
         //introducing grey scale
        //  return random(0,255);
      
        a = random(0,255);
        if (a < 127) {
        return 0;
         }
        else {
          return 255;
         }
        }

        function leftToright(squareRow,squareColumn){

          let oldColor = [];
      
          //column zero
          if (squareColumn == 0){
      
            oldColor[0] = pattern[squareRow + 1][0];
            oldColor[1] = pattern[squareRow + 1][1];
            
            if (oldColor[0] == oldColor[1]){
             return oldColor[0];
            } 
             return oldColor[1];
            }
      
            
          //last column (column on right)
            if (squareColumn == squareNum -1){
            oldColor[0] = pattern[squareRow + 1][squareNum -2];
            oldColor[1] = pattern[squareRow + 1][squareNum -1];
            
            if (oldColor[0] == oldColor[1]){
             return oldColor[0];
            } 
             return oldColor[0];
            }
          
            //columns b/w the left (first) and right (last)
          oldColor[0] = pattern[squareRow + 1][squareColumn-1];
          oldColor[1] = pattern[squareRow + 1][squareColumn];
          oldColor[2] = pattern[squareRow + 1][squareColumn + 1]; 
          
          return oldColor[2];
          }

          function rightToleft(squareRow,squareColumn){

            let oldColor = [];
        
            //column zero
            if (squareColumn == 0){
        
              oldColor[0] = pattern[squareRow + 1][0];
              oldColor[1] = pattern[squareRow + 1][1];
              
              if (oldColor[0] == oldColor[1]){
               return oldColor[0];
              } 
               return oldColor[1];
              }
        
              
            //last column (column on right)
              if (squareColumn == squareNum -1){
              oldColor[0] = pattern[squareRow + 1][squareNum -2];
              oldColor[1] = pattern[squareRow + 1][squareNum -1];
              
              if (oldColor[0] == oldColor[1]){
               return oldColor[0];
              } 
               return oldColor[0];
              }
            
              //columns b/w the left (first) and right (last)
            oldColor[0] = pattern[squareRow + 1][squareColumn-1];
            oldColor[1] = pattern[squareRow + 1][squareColumn];
            oldColor[2] = pattern[squareRow + 1][squareColumn + 1]; 
            
            return oldColor[0];
            }