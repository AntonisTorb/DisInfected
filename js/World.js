const TILE_W = 50;
const TILE_H = 50;
const TILE_COLS = 14;
const TILE_ROWS = 12;
const SCORE_SCREEN_WIDTH = 100;

let worldGrid = [0,0,1,0,1,0,0,0,1,0,0,0,0,1,
				 1,0,0,0,0,0,0,0,0,0,1,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,1,0,0,0,0,0,0,0,0,0,0,0,1,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 1,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,1,
				 1,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				 0,0,0,0,0,0,1,0,0,0,0,0,0,0,
				 1,0,0,0,1,0,0,0,0,1,0,0,0,1,
				 ];

const TILE_ROAD = 0;
const TILE_INFECTED = 1;

/*function colRowToArrayIndex(col,row){//will i even need this?
	return col + TILE_COLS * row;
}*/

function drawWorld(){
	let arrayIndex = 0;
	let tileX = 0;
	let tileY = 0;
	for(let eachRow=0;eachRow<TILE_ROWS;eachRow++){
		for(let eachCol=0;eachCol<TILE_COLS;eachCol++){
			let tileKind = worldGrid[arrayIndex];
			let useImg = worldImages[tileKind];
			
			canvasContext.drawImage(useImg, tileX,tileY);
			tileX += TILE_W;
			arrayIndex++;
		}
		tileY += TILE_H;
		tileX = 0;
	}
}