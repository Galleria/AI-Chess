
function ChessHouse(x,y,table) {
	this.X = x;
	this.Y = y;
	this.Table = table;
	this.Table[this.Y][this.X] = 1;
	this.Deep = 0;
	this.score = 0;
	this.moveTop_left = null;
	this.moveTop_right = null;
	this.moveDown_left = null;
	this.moveDown_right = null;
	this.moveLeft_top = null;
	this.moveLeft_down = null;
	this.moveRight_top = null;
	this.moveRight_down = null;

	this.toString =function(){
		var text = "";
		text += "House @ x:" + this.X + " y:" + this.Y + "\n";
		text += "Deep @ " + this.Deep + "\n"; 
		text += "Can Move @ " + this.score + "\n"; 
		for(var i=0 ; i < this.Table.length ; i++)
		{
			for(var j = 0 ; j < this.Table[i].length ; j++)
			{
				text+= " "+this.Table[i][j]+" " ;	
			}
			text += "\n";
		}
		return text;
	}
}

// Move 8 Setp

	function moveTop_left(x,y){
		var current_x = x - 1;
		var current_y = y - 2;
		var current = new Array(2);
		current[0] = current_x;
		current[1] = current_y;
		return current;
	}

	function moveTop_right(x,y){
		var current_x = x + 1;
		var current_y = y - 2;
		var current = new Array(2);
		current[0] = current_x;
		current[1] = current_y;
		return current;
	}

	function moveDown_left(x,y){
		var current_x = x - 1;
		var current_y = y + 2;
		var current = new Array(2);
		current[0] = current_x;
		current[1] = current_y;
		return current;
	}

	function moveDown_right(x,y){
		var current_x = x + 1;
		var current_y = y + 2;
		var current = new Array(2);
		current[0] = current_x;
		current[1] = current_y;
		return current;
	}

	function moveLeft_top(x,y){
		var current_x = x - 2;
		var current_y = y - 1;
		var current = new Array(2);
		current[0] = current_x;
		current[1] = current_y;
		return current;
	}

	function moveLeft_down(x,y){
		var current_x = x - 2;
		var current_y = y + 1;
		var current = new Array(2);
		current[0] = current_x;
		current[1] = current_y;
		return current;
	}

	function moveRight_top(x,y){
		var current_x = x + 2;
		var current_y = y - 1;
		var current = new Array(2);
		current[0] = current_x;
		current[1] = current_y;
		return current;
	}

	function moveRight_down(x,y){
		var current_x = x + 2;
		var current_y = y + 1;
		var current = new Array(2);
		current[0] = current_x;
		current[1] = current_y;
		return current;
	}

// Move 8 Setp

// Check Move in Table N*N

	function check_move(position){
		//alert(position[0] +":"+ position[1] +":"+Table_Size);
		if( position[0] >=0 && position[1] >= 0 && position[0] < Table_Size && position[1] < Table_Size)
		{
			return true;
		}
		else
			return false;
	}

// Check Move in Table N*N

// Heuristic score function
// can move x step  

function max(table){
    	var current = table;
    	var score = 0;
    	if( current.moveTop_left != null )
    		score++;
    	if( current.moveTop_right != null )
    		score++;
    	if( current.moveDown_left != null )
    		score++;
    	if( current.moveDown_right != null )
    		score++;
    	if( current.moveLeft_down != null )
    		score++;
    	if( current.moveLeft_top != null )
    		score++;
    	if( current.moveRight_down != null )
    		score++;
    	if( current.moveRight_top != null )
    		score++;
    	return score;
    }

// Heuristic score function

// Print Table 

function print_table( Table ){
	var text = "";
	for(var i=0 ; i < Table.length ; i++)
	{
		for(var j = 0 ; j < Table[i].length ; j++)
		{
			text+= " "+Table[i][j]+" " ;	
		}
		text += "\n";
	}
	alert(  text  );
}

// Print Table 

//Copy Table

function copy_table( Table ){
	var temp = new Array( Table_Size );
	for(var i=0 ; i < temp.length ; i++)
		temp[i] = new Array( Table_Size );	

	for(var i=0 ; i < temp.length ; i++)
			for(var j = 0 ; j < temp[i].length ; j++)
				temp[i][j] = Table[i][j];

	return temp ;
}

//Copy Table

// Create Table N*N
function create_table(){
	var Temp = new Array( Table_Size );
	for(var i=0 ; i < Temp.length ; i++)
		Temp[i] = new Array( Table_Size );	

	for(var i=0 ; i < Temp.length ; i++)
			for(var j = 0 ; j < Temp[i].length ; j++)
				Temp[i][j] = 0;	
	return Temp;
}

Array.prototype.max = function() {
	var max = this[0];
	var len = this.length;
	for (var i = 1; i < len; i++) if (this[i] > max) max = this[i];
	return max;
}

Array.prototype.min = function() {
	var min = this[0];
	var len = this.length;
	for (var i = 1; i < len; i++) if (this[i] < min) min = this[i];
	return min;
}



/*
var SetDeep = 2;
var Table_Size = 5;
var Te = create_table();
var t1 = new ChessHouse(3,3,Te);

create_tree(t1,0);

var count=0;
var result_score = new Array();
var result_move = new Array();
var result_best = new Array();
var j=0;
Minimax();

Find_way( t1 , SetDeep-1 , 0 ) ;


*/
/*
function Minimax(Table_Chess){
	var j=0;
	count=0;
	var turn_it = SetDeep;
	result_score.splice( 0 , result_score.length );
	result_move.splice( 0 , result_move.length );
	result_best.splice( 0 , result_best.length );
	var temp_result_move = new Array();
	var temp_result_score = new Array();
	var temp_count =0;
	var range_array =0;

	Find_way( Table_Chess , SetDeep , 0 , "" , "" ) ;
	
	// cut String
	for(var i=0 ; i<result_move.length;i++)
	{
		result_move[i] = result_move[i].replace("Start,","");
	}
	
	// print all result
	console.log("result all :"+ count );
	for(var i=0 ; i<result_move.length;i++)
		console.log("Score : "+result_score[i]+" : "+ result_move[i] );
		//console.log("round :"+i+" Score : "+result_score[i]+" : "+ result_move[i] );


	if(result_move.length >0)
	{
		Temp_text="";
		var Deeping = SetDeep;
		for(var i=0 ; Deeping > 0 ; i++ )
		{
			temp_result_move.splice( 0 , temp_result_move.length );
			temp_result_score.splice( 0 , temp_result_score.length );
			temp_count =0;

			for(var k=0 ; k<result_move.length;k++)
			{
				//console.log("round :"+k+" "+result_move[k] +" length "+result_move[k].length+" Deep "+((Deeping*2)-1) );
				if( result_move[k].length < ((Deeping*2)-1) )
				{
					//alert( ((Deeping*2)-1)+" max < :"+result_move[k] );
					temp_result_score[temp_count] = result_score[k];
					temp_result_move[temp_count++] = result_move[k];
					//console.log("in Temp  :"+result_score[k]+" "+result_move[k] );
					result_score.splice(k,1);
					result_move.splice(k,1);
					k--;
				}
			}

			//console.log("Temp :"+temp_result_move.length)
			//	for(var i=0 ; i<temp_result_move.length;i++)
			//		console.log("Temp score :"+temp_result_score[i]+" "+temp_result_move[i] );

			if( (Deeping%2) == 0)
			{
				var max = result_score.max();
				if( result_score.length ==0 )
					max = -1;
				console.log("Max Score :"+result_score.max());
				j=0;
				//alert("Next Turn Can Move Max : "+ max);
				// Max Cpu can move
				Temp_text += (turn_it--) +" Max(PC) :"+ max +"\n";
				for(var i=0 ; i<result_score.length;i++)
				{
					if( result_score[i] == max)
					{
						result_best[j++] = result_move[i];
					}
				}
			}
			else
			{
				var min = result_score.min();
				if( result_score.length ==0 )
					min = -1;
				console.log("Max Score :"+result_score.max());
				j=0;
				//alert("Next Turn Can Move Min : "+ min);
				// Min PLayer can move
				Temp_text += (turn_it--) +" Min(player) :"+ min +"\n";
				for(var i=0 ; i<result_score.length;i++)
				{
					if( result_score[i] == min)
					{
						result_best[j++] = result_move[i];
					}
				}
			}

			//console.log("result_best :"+result_best.length);
			result_move.splice( 0 , result_move.length );
			for(var i=0 ; i<result_best.length;i++)
				result_move[i] = result_best[i];


			console.log("Best result :"+result_move.length);
			for(var i=0 ; i<result_move.length;i++)
				console.log(result_move[i] );

			if( result_move.length > 0 )
			{
				//alert(result_move[0] +": "+ result_move[0].length +" # "+ result_move[0].substring( 0 , result_move[0].length-2 ).length );
				if( result_move[0].substring( 0 , result_move[0].length-2 ).length >= 1 )
				{
					for(var i=0 ; i<result_move.length;i++)
					{
						result_move[i] = result_move[i].substring( 0 , result_move[i].length-2 );
						//alert("After "+ result_move[i] );
					}

					result_score.splice( 0 , result_score.length );
					for(var i=0 ; i<result_move.length;i++)
					{
						result_score[i]=find_score( Table_Chess , result_move[i] );
						//alert( result_score[i] );
						//alert("Move "+ result_move[i] +"Score :"+ result_score[i] );
					}
					result_best.splice( 0 , result_best.length );
				}
				else
					Deeping =0;
			}
			
			range_array = result_move.length ;
			for(var i=0; i<temp_result_move.length ; i++)
			{
				result_move[ range_array+i ] = temp_result_move[i];
				result_score[ range_array+i ] = temp_result_score[i];
			}
			//console.log("result_score "+result_score.length);
			//for(var i=0; i<result_score.length ; i++)
			//	console.log("score = "+result_score[i]+ " move : "+ result_move[i]);
		Deeping--;

		}
	}

	//alert("Best result :"+result_move.length);
	j=0;
	result_best.splice( 0 , result_best.length );
	for(var i=0 ; i<result_move.length;i++)
	{
		//alert( result_move[i] );
		result_best[j++] = result_move[i];
	}
	//alert(Temp_text);
	console.log(Temp_text);
}
*/

function Minimax(Table_Chess){
	var j=0;
	count=0;
	result_score.splice( 0 , result_score.length );
	result_move.splice( 0 , result_move.length );
	result_best.splice( 0 , result_best.length );
	var temp_result_move = new Array();
	var temp_result_score = new Array();
	var temp_score =new Array();
	var temp_count =0;
	var range_array =0;

	Find_way( Table_Chess , SetDeep , 0 , "" , "" ) ;
	//console.log("result_move.length "+result_move.length);
	//console.log("result_score.length "+result_score.length);
	// cut String
	for(var i=0 ; i<result_move.length;i++)
		result_move[i] = result_move[i].replace("Start,","");

	// print all result
	console.log("result all :"+ count );
	for(var i=0 ; i<result_move.length;i++)
		console.log("Score : "+result_score[i]+" : "+ result_move[i] );

	if(result_move.length >0)
	{
		var Deeping = SetDeep;
		for(var i=0 ; Deeping > 0 ; i++ )
		{
			temp_result_move.splice( 0 , temp_result_move.length );
			temp_result_score.splice( 0 , temp_result_score.length );
			temp_count =0;

			for(var k=0 ; k<result_move.length;k++)
			{
				if( result_move[k].length < ((Deeping*2)-1) )
				{
					temp_result_score[temp_count] = result_score[k];
					temp_result_move[temp_count++] = result_move[k];
					result_score.splice(k,1);
					result_move.splice(k,1);
					k--;
				}
			}
			console.log("Temp :"+temp_result_move.length);

			if( (Deeping%2) == 0)
			{
				j=0;
				// Max Cpu can move
				for(var i=0 ; i<result_score.length;i++)
					if( result_score[i] > 0)
					{
						result_best[j] = result_move[i];
						temp_score[j++] = result_score[i];
					}
			}
			else
			{
				j=0;
				// Min PLayer can move
				for(var i=0 ; i<result_score.length;i++)
					if( result_score[i] == 0)
					{
						result_best[j] = result_move[i];
						temp_score[j++] = result_score[i];
					}
			}

			//console.log("result_best :"+result_best.length);
			// if result_best = null find way for move
			if( result_best.length == 0 )
			{
				var min = result_score.min();
				for(var i=0 ; i<result_score.length;i++)
					if( result_score[i] == min)
					{
						result_best[j] = result_move[i];
						temp_score[j++] = result_score[i];
					}
			}

			result_move.splice( 0 , result_move.length );
			for(var i=0 ; i<result_best.length;i++)
				result_move[i] = result_best[i];

			result_score.splice( 0 , result_score.length );
			for(var i=0 ; i<temp_score.length;i++)
				result_score[i] = temp_score[i];

			//Print Result
			//console.log("Best result :"+result_move.length);
			//for(var i=0 ; i<result_move.length;i++)
			//	console.log(result_score[i]+" "+result_move[i] );
			//Print Result

			if( result_move.length > 0 )
			{
				range_array = result_move.length ;
				for( var i=0 ; i<result_move.length;i++ )
					if( result_move[i].substring( 0 , result_move[i].length-2 ) >=1 )
						for( var k=0 ; k<temp_result_move.length;k++ )
							if( temp_result_move[k].indexOf( result_move[i].substring( 0 , result_move[i].length-2 ) ) > 0 )
							{
								result_move[ range_array+i ] = temp_result_move[i];
								result_score[ range_array+i ] = temp_result_score[i];
								temp_result_score.splice(k,1);
								temp_result_move.splice(k,1);
							}

			}
			//console.log("result_move.length "+result_move.length);
			//console.log("result_score.length "+result_score.length);
			//console.log("temp_result_move.length "+temp_result_move.length);
			range_array = result_move.length ;
			for(var i=0; i<temp_result_move.length ; i++)
			{
				result_move[ range_array+i ] = temp_result_move[i];
				result_score[ range_array+i ] = temp_result_score[i];
			}
			console.log("result_score "+result_score.length);
			for(var i=0; i<result_score.length ; i++)
				console.log("score = "+result_score[i]+ " move : "+ result_move[i]);
		Deeping--;
		}
	}

	//console.log("All Best result :"+result_move.length);
	result_best.splice( 0 , result_best.length );
	for(var i=0 ; i<result_move.length;i++)
	{
		result_best[i] = result_move[i];
		//console.log("result :"+result_best[i]);
	}

	var min_length = result_best[0].length;
	var min_at = 0;
	for (var i = 1; i < result_best.length; i++) 
	{
		if (result_best[i].length < min_length) 
		{ 
			min_length = result_best[i].length; 
			result_best.splice( (min_at), 1 );
			min_at = i;
			if(result_best.length>1)
				i= (-1);
		}
		else
		{
			if(result_best[i].length > min_length)
			{
				result_best.splice( i, 1 );
				i--;
			}
		}
	}
}



function Find_way(table,maxdeep,deep,tString,move){
	var current = table;
	if(deep==0)
		move ="Start";

        if( maxdeep == deep )
        {
        	//alert( tString+" "+current.X+";"+current.Y+" "+current.score );
        	result_score[count] = current.score;
        	result_move[count++] = move;
        	//count++;
        	return;
        }
        else
        {
				if( current.moveTop_left != null )
					Find_way( current.moveTop_left , maxdeep , deep+1 , "moveTop_left" , move+","+0 );
				if( current.moveTop_right != null )
					Find_way( current.moveTop_right , maxdeep , deep+1 , "moveTop_right" , move+","+1 );
				if( current.moveDown_left != null )
					Find_way( current.moveDown_left , maxdeep , deep+1 , "moveDown_left" , move+","+2 );
				if( current.moveDown_right != null )
					Find_way( current.moveDown_right , maxdeep , deep+1 , "moveDown_right" , move+","+3 );
				if( current.moveLeft_top != null )
					Find_way( current.moveLeft_top , maxdeep , deep+1 , "moveLeft_top" , move+","+4 );
				if( current.moveLeft_down != null )
					Find_way( current.moveLeft_down , maxdeep , deep+1 , "moveLeft_down" , move+","+5 );
				if( current.moveRight_top != null )
					Find_way( current.moveRight_top , maxdeep , deep+1 , "moveRight_top" , move+","+6 );
				if( current.moveRight_down != null )
					Find_way( current.moveRight_down , maxdeep , deep+1 , "moveRight_down" , move+","+7 );	

				if( current.moveTop_left == null && current.moveTop_right == null && current.moveDown_left == null && current.moveDown_right == null &&
	 				current.moveLeft_top == null && current.moveLeft_down == null && current.moveRight_top == null && current.moveRight_down == null )
	 			{
	 				result_score[count] = current.score;
        			result_move[count++] = move;
        			return;
	 			}
	 			
		}
}

/*
function move_one(Table_Chess){
	var current = Table_Chess;
	if( current.moveTop_left != null )
		result_best[0] = 0;
	if( current.moveTop_right != null )
		result_best[0] = 1;
	if( current.moveDown_left != null )
		result_best[0] = 2;
	if( current.moveDown_right != null )
		result_best[0] = 3;
	if( current.moveLeft_top != null )
		result_best[0] = 4;
	if( current.moveLeft_down != null )
		result_best[0] = 5;
	if( current.moveRight_top != null )
		result_best[0] = 6;
	if( current.moveRight_down != null )
		result_best[0] = 7;	
}
*/

function create_tree(target,deep){
		//alert( target );
		var current = target;
		target.Deep = deep;
		if( deep == (SetDeep+1) )
			{
				return ;
			}
		while(1)
		{
			
			// 1 Move Top Left
			var stop = moveTop_left( current.X , current.Y );
			var move = check_move( stop ) ;
			if(move)
			{
				//alert( deep +" Top_left "+stop[1]+":"+stop[0]+" "+ current.Table[ stop[1] ][ stop[0] ] );
				if( current.Table[ stop[1] ][ stop[0] ] == 0 )
				{
					var temp_table = copy_table(current.Table) ;
					temp_table[ stop[1] ][ stop[0] ] = 1;
					//print_table(temp_table );
					var temp = new ChessHouse( stop[0] , stop[1] , temp_table );
					while(current.moveTop_left){
		                current = current.moveTop_left;
		            }
		            current.moveTop_left = temp;
		            //alert( current.moveTop_left.X +" "+ current.moveTop_left.Y );
		            create_tree( current.moveTop_left , deep+1 );
				}
			}

			// 2 Move Top Right
			var stop = moveTop_right( current.X , current.Y );
			var move = check_move( stop ) ;
			if(move)
			{
				//alert( deep +" Top_right "+stop[1]+":"+stop[0]+" "+ current.Table[ stop[1] ][ stop[0] ] );
				if( current.Table[ stop[1] ][ stop[0] ] == 0 )
				{
					var temp_table = copy_table(current.Table) ;
					temp_table[ stop[1] ][ stop[0] ] = 1;
					//print_table( temp_table );
					var temp = new ChessHouse( stop[0] , stop[1] , temp_table );
					while(current.moveTop_right){
		                current = current.moveTop_right;
		            }
		            current.moveTop_right = temp;
		            //alert( current.moveTop_left.X +" "+ current.moveTop_left.Y );
		            create_tree( current.moveTop_right , deep+1 );
				}
			}

			// 3 Move Left Top
			var stop = moveLeft_top( current.X , current.Y );
			var move = check_move( stop ) ;
			if(move)
			{
				//alert( deep +" Left_top "+stop[1]+":"+stop[0]+" "+ current.Table[ stop[1] ][ stop[0] ] );
				if( current.Table[ stop[1] ][ stop[0] ] == 0 )
				{
					var temp_table = copy_table(current.Table) ;
					temp_table[ stop[1] ][ stop[0] ] = 1;
					//print_table( temp_table );
					var temp = new ChessHouse( stop[0] , stop[1] , temp_table );
					while(current.moveLeft_top){
		                current = current.moveLeft_top;
		            }
		            current.moveLeft_top = temp;
		            //alert( current.moveTop_left.X +" "+ current.moveTop_left.Y );
		            create_tree( current.moveLeft_top  , deep+1  );
				}
			}

			// 4 Move Right Top
			var stop = moveRight_top( current.X , current.Y );
			var move = check_move( stop ) ;
			if(move)
			{
				//alert( deep +" Right_top "+stop[1]+":"+stop[0]+" "+ current.Table[ stop[1] ][ stop[0] ] );
				if( current.Table[ stop[1] ][ stop[0] ] == 0 )
				{
					var temp_table = copy_table(current.Table) ;
					temp_table[ stop[1] ][ stop[0] ] = 1;
					//print_table( temp_table );
					var temp = new ChessHouse( stop[0] , stop[1] , temp_table );
					while(current.moveRight_top){
		                current = current.moveRight_top;
		            }
		            current.moveRight_top = temp;
		            //alert( current.moveTop_left.X +" "+ current.moveTop_left.Y );
		            create_tree( current.moveRight_top , deep+1  );
				}
			}
			// 5 Move Left Down
			var stop = moveLeft_down( current.X , current.Y );
			var move = check_move( stop ) ;
			if(move)
			{
				//alert( deep +" Left_down "+stop[1]+":"+stop[0]+" "+ current.Table[ stop[1] ][ stop[0] ] );
				if( current.Table[ stop[1] ][ stop[0] ] == 0 )
				{
					var temp_table = copy_table(current.Table) ;
					temp_table[ stop[1] ][ stop[0] ] = 1;
					//print_table( temp_table );
					var temp = new ChessHouse( stop[0] , stop[1] , temp_table );
					while(current.moveLeft_down){
		                current = current.moveLeft_down;
		            }
		            current.moveLeft_down = temp;
		            //alert( current.moveTop_left.X +" "+ current.moveTop_left.Y );
		            create_tree( current.moveLeft_down  , deep+1 );
				}
			}

			// 6 Move Right Down
			var stop = moveRight_down( current.X , current.Y );
			var move = check_move( stop ) ;
			if(move)
			{
				//alert( deep +" Right_down "+stop[1]+":"+stop[0]+" "+ current.Table[ stop[1] ][ stop[0] ] );
				if( current.Table[ stop[1] ][ stop[0] ] == 0 )
				{
					var temp_table = copy_table(current.Table) ;
					temp_table[ stop[1] ][ stop[0] ] = 1;
					//print_table( temp_table );
					var temp = new ChessHouse( stop[0] , stop[1] , temp_table );
					while(current.moveRight_down){
		                current = current.moveRight_down;
		            }
		            current.moveRight_down = temp;
		            //alert( current.moveTop_left.X +" "+ current.moveTop_left.Y );
		            create_tree( current.moveRight_down , deep+1  );
				}
			}

			// 7 Move Down Left
			var stop = moveDown_left( current.X , current.Y );
			var move = check_move( stop ) ;
			if(move)
			{
				//alert( deep +" Down_left "+stop[1]+":"+stop[0]+" "+ current.Table[ stop[1] ][ stop[0] ] );
				if( current.Table[ stop[1] ][ stop[0] ] == 0 )
				{
					var temp_table = copy_table(current.Table) ;
					temp_table[ stop[1] ][ stop[0] ] = 1;
					//print_table( temp_table );
					var temp = new ChessHouse( stop[0] , stop[1] , temp_table );
					while(current.moveDown_left){
		                current = current.moveDown_left;
		            }
		            current.moveDown_left = temp;
		            //alert( current.moveTop_left.X +" "+ current.moveTop_left.Y );
		            create_tree( current.moveDown_left , deep+1  );
				}
			}

			// 8 Move Down Right
			var stop = moveDown_right( current.X , current.Y );
			var move = check_move( stop ) ;
			if(move)
			{
				//alert( deep +" Down_right "+stop[1]+":"+stop[0]+" "+ current.Table[ stop[1] ][ stop[0] ] );
				if( current.Table[ stop[1] ][ stop[0] ] == 0 )
				{
					var temp_table = copy_table(current.Table) ;
					temp_table[ stop[1] ][ stop[0] ] = 1;
					//print_table( temp_table );
					var temp = new ChessHouse( stop[0] , stop[1] , temp_table );
					while(current.moveDown_right){
		                current = current.moveDown_right;
		            }
		            current.moveDown_right = temp;
		            //alert( current.moveTop_left.X +" "+ current.moveTop_left.Y );
		            create_tree( current.moveDown_right  , deep+1 );
				}
			}
			
			current.score = max(current);
			
			return ;
		}
}

function find_score(Table,move){
	var current = Table;
	var move_arr = move.split(',');
	var i=0;
	while(1){
		//alert(i+":"+move_arr[i]);
		if( move_arr[i] == 0 )
		{
			current = current.moveTop_left;
		}
		if( move_arr[i] == 1 )
		{
			current = current.moveTop_right;
		}
		if( move_arr[i] == 2 )
		{
			current = current.moveDown_left;
		}
		if( move_arr[i] == 3 )
		{
			current = current.moveDown_right;
		}
		if( move_arr[i] == 4 )
		{
			current = current.moveLeft_top;
		}
		if( move_arr[i] == 5 )
		{
			current = current.moveLeft_down;
		}
		if( move_arr[i] == 6 )
		{
			current = current.moveRight_top;
		}
		if( move_arr[i] == 7 )
		{
			current = current.moveRight_down;
		}
		if(i == (move_arr.length-1) )
			return current.score;
		i++;
	}
}






