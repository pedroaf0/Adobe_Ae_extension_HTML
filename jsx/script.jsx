var scripts = [
	"//POSIÇÃO - ELÁSTICO 01 [3 frames]\n \n n = 0;\n if (numKeys > 0){\n n = nearestKey(time).index;\n if (key(n).time > time){\n n--;\n }\n }\n if (n == 0){\n t = 0;\n }else{\n t = time - key(n).time;\n }\n \n if (n > 0){\n v = velocityAtTime(key(n).time - thisComp.frameDuration/10);\n amp = 3;\n freq = 2.0;\n decay = 3.0;\n value + (v/100)*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);\n }else{\n value;\n }",
	"//POSIÇÃO - ELÁSTICO 02 [1 frame]\n \n n = 0;\n if (numKeys > 0){\n n = nearestKey(time).index;\n if (key(n).time > time){\n n--;\n }\n }\n if (n == 0){\n t = 0;\n }else{\n t = time - key(n).time;\n }\n if (n > 0){\n v = velocityAtTime(key(n).time - thisComp.frameDuration/10);\n amp = .02;\n freq = 3.0;\n decay = 5.0;\n value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);\n }else{\n value;\n }\n" ,
	"//ESCALA [3 frames]\n\nn = 0;\nif (numKeys > 0)\n{n = nearestKey(time).index;if (key(n).time > time){n--;}}\nif (n == 0) {t = 0;} else {t = time - key(n).time;}\nif (n > 0){v = velocityAtTime(key(n).time - thisComp.frameDuration/10);\namp = 8;\nfreq = 2.0;\ndecay = 3.0;\nvalue + (v/100)*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);}else{value;}\n\n",
	"//ROTAÇÃO [1 frame]\n \n n = 0;\n if (numKeys > 0) {\n n = nearestKey(time).index;\n if (key(n).time > time){\n n--;\n }\n }\n if (n == 0) {\n t = 0;\n } else {\n t = time - key(n).time;\n }\n if (n > 0){\n v = velocityAtTime(key(n).time - thisComp.frameDuration/10);\n amp = 8;\n freq = 2.0;\n decay = 3.0;\n value + (v/100)*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);\n }else{\n value;\n }\n \n \n ",
	"//GELATINA [Aplicar na ESCALA da pré-composição]\n \n freq = 2;\n amplitude = 40;\n decay = 1.0; \n \n t = time - inPoint;\n x = scale[0] + amplitude*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);\n y = (1/x)*10000;\n [x,y]"
]
function a(b){

	if (b == 0) app.project.activeItem.layer(1).transform.position.expression = scripts[b];
	if (b == 1) app.project.activeItem.layer(1).transform.position.expression = scripts[b];
	if (b == 4) app.project.activeItem.layer(1).transform.scale.expression = scripts[b];
	if (b == 2) app.project.activeItem.layer(1).transform.scale.expression = scripts[b];
	if (b == 3) app.project.activeItem.layer(1).transform.rotation.expression = scripts[b];
}
