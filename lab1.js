/*
*	Katie Hadgis
*	CS452 Computer Graphics
*	Homework #1
*	01/29/15
*/
var gl;
var points;

var vPosition, vPosition2;
var bufferId, bufferId2;
var program; var canvas;

var i = 0;

var vertices = new Float32Array([
								0,0,
								1,0,
								0.8660254,.5,
								0.7071067,0.7071067,
								.5,0.8660254,
								0,1,
								-.5,0.8660254,
								-0.7071067,0.7071067,
								-0.8660254,.5,
								-1,0,
								-0.8660254,-.5,
								-0.7071067,-0.7071067,
								-.5,-0.8660254,
								0,-1,
								.5,-0.8660254,
								0.7071067,-0.7071067,
								0.8660254,-.5,
								1,0
								]);
								
var vertices2 = new Float32Array([-0.1, 0.1, 
								  0.0, 0.8, 
								  0.1, 0.1,
								  0.1, 0.1,
								  0.8, 0.1,
								  0.2, -0.1,
								  0.2,-0.1,
								  0.5,-0.8,
								  0.0, -0.3,
								  0.0, -0.3,
								  0.2, -0.1,
								  0.1, 0.1,
								  0.1, 0.1,
								  -0.1, 0.1,
								  0.0, -0.3,
								  0.0, -0.3,
								  -0.2, -0.1,
								  -0.1, 0.1,
								  -0.1, 0.1,
								  -0.2, -0.1,
								  -0.8, 0.1,
								  0.0, -0.3,
								  -0.5, -0.8,
								  -0.2, -0.1
								  ]);
								  
var vertices3 = new Float32Array([0.2, 0.4,
								  0.2, -0.4,
								  0.8, -0.3,
								  0.2, 0.4,
								  0.8, 0.3,
								  0.8, -0.3,
								  -0.2, 0.4,
								  -0.2, -0.4,
								  -0.8, -0.3,
								  -0.2, 0.4,
								  -0.8, 0.3,
								  -0.8, -0.3
								  ]);

window.onload = function init()
{
    canvas = document.getElementById( "gl-canvas" );
	
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    

    //
    //  Configure WebGL
    //
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
    
    //  Load shaders and initialize attribute buffers
    
    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );
    
    // Load the data into the GPU
    
    bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER,vertices, gl.STATIC_DRAW );

    
    bufferId2 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId2 );
    gl.bufferData( gl.ARRAY_BUFFER,vertices2, gl.STATIC_DRAW );
	
	bufferId3 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId3 );
    gl.bufferData( gl.ARRAY_BUFFER,vertices3, gl.STATIC_DRAW );

	render();
	document.getElementById("button").onclick = function(){
		i++;
		render();
	}
	
};

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
	if (i < 0 || i > 2) i = 0;
	if (i == 0){
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );
    gl.drawArrays( gl.TRIANGLE_FAN, 0, vertices.length/2);
	}
    
    if (i == 1){
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId2 );
    vPosition2 = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition2, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition2 );
    gl.drawArrays( gl.TRIANGLES, 0, vertices2.length/2 );
	}
	
	if (i == 2){
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId3 );
    vPosition3 = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition3, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition3 );
    gl.drawArrays( gl.TRIANGLES, 0, vertices3.length/2 );
	}
}
