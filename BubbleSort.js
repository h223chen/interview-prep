const list = [9,2,4,7,5,6,8,3,1];

const bblSort = (list) => {
	  for (let i=0; i<list.length; i++) {
		      for (let j=0; j<list.length-1-i; j++) {
			            if (list[j] > list[j+1]) {
					            let temp = list[j+1];
					            list[j+1] = list[j];
					            list[j] = temp;
					          }    
			          }

		      console.log('iteration', i, list);
		    }  

	  return list;
};


console.log(bblSort(list))
