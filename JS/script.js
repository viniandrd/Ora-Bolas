var tempo = [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24, 0.26, 0.28, 0.3, 0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 0.52, 0.54, 0.56, 0.58, 0.6, 0.62, 0.64, 0.66, 0.68, 0.7, 0.72, 0.74, 0.76, 0.78, 0.8, 0.82, 0.84, 0.86, 0.88, 0.9, 0.92, 0.94, 0.96, 0.98, 1, 1.02, 1.04, 1.06, 1.08, 1.1, 1.12, 1.14, 1.16, 1.18, 1.2, 1.22, 1.24, 1.26, 1.28, 1.3, 1.32, 1.34, 1.36, 1.38, 1.4, 1.42, 1.44, 1.46, 1.48, 1.5, 1.52, 1.54, 1.56, 1.58, 1.6, 1.62, 1.64, 1.66, 1.68, 1.7, 1.72, 1.74, 1.76, 1.78, 1.8, 1.82, 1.84, 1.86, 1.88, 1.9, 1.92, 1.94, 1.96, 1.98, 2, 2.02, 2.04, 2.06, 2.08, 2.1, 2.12, 2.14, 2.16, 2.18, 2.2, 2.22, 2.24, 2.26, 2.28, 2.3, 2.32, 2.34, 2.36, 2.38, 2.4, 2.42, 2.44, 2.46, 2.48, 2.5, 2.52, 2.54, 2.56, 2.58, 2.6, 2.62, 2.64, 2.66, 2.68, 2.7, 2.72, 2.74, 2.76, 2.78, 2.8, 2.82, 2.84, 2.86, 2.88, 2.9, 2.92, 2.94, 2.96, 2.98, 3, 3.02, 3.04, 3.06, 3.08, 3.1, 3.12, 3.14, 3.16, 3.18, 3.2, 3.22, 3.24, 3.26, 3.28, 3.3, 3.32, 3.34, 3.36, 3.38, 3.4, 3.42, 3.44, 3.46, 3.48, 3.5, 3.52, 3.54, 3.56, 3.58, 3.6, 3.62, 3.64, 3.66, 3.68, 3.7, 3.72, 3.74, 3.76, 3.78, 3.8, 3.82, 3.84, 3.86, 3.88, 3.9, 3.92, 3.94, 3.96, 3.98, 4, 4.02, 4.04, 4.06, 4.08, 4.1, 4.12, 4.14, 4.16, 4.18, 4.2, 4.22, 4.24, 4.26, 4.28, 4.3, 4.32, 4.34, 4.36, 4.38, 4.4, 4.42, 4.44, 4.46, 4.48, 4.5, 4.52, 4.54, 4.56, 4.58, 4.6, 4.62, 4.64, 4.66, 4.68, 4.7, 4.72, 4.74, 4.76, 4.78, 4.8, 4.82, 4.84, 4.86, 4.88, 4.9, 4.92, 4.94, 4.96, 4.98, 5, 5.02, 5.04, 5.06, 5.08, 5.1, 5.12, 5.14, 5.16, 5.18, 5.2, 5.22, 5.24, 5.26, 5.28, 5.3, 5.32, 5.34, 5.36, 5.38, 5.4, 5.42, 5.44, 5.46, 5.48, 5.5, 5.52, 5.54, 5.56, 5.58, 5.6, 5.62, 5.64, 5.66, 5.68, 5.7, 5.72, 5.74, 5.76, 5.78, 5.8, 5.82, 5.84, 5.86, 5.88, 5.9, 5.92, 5.94, 5.96, 5.98, 6, 6.02, 6.04, 6.06, 6.08, 6.1, 6.12, 6.14, 6.16, 6.18, 6.2, 6.22, 6.24, 6.26, 6.28, 6.3, 6.32, 6.34, 6.36, 6.38, 6.4, 6.42, 6.44, 6.46, 6.48, 6.5, 6.52, 6.54, 6.56, 6.58, 6.6, 6.62, 6.64, 6.66, 6.68, 6.7, 6.72, 6.74, 6.76, 6.78, 6.8, 6.82, 6.84, 6.86, 6.88, 6.9, 6.92, 6.94, 6.96, 6.98, 7, 7.02, 7.04, 7.06, 7.08, 7.1, 7.12, 7.14, 7.16, 7.18, 7.2, 7.22, 7.24, 7.26, 7.28, 7.3, 7.32, 7.34, 7.36, 7.38, 7.4, 7.42, 7.44, 7.46, 7.48, 7.5, 7.52, 7.54, 7.56, 7.58, 7.6, 7.62, 7.64, 7.66, 7.68, 7.7, 7.72, 7.74, 7.76, 7.78, 7.8, 7.82, 7.84, 7.86, 7.88, 7.9, 7.92, 7.94, 7.96, 7.98, 8, 8.02, 8.04, 8.06, 8.08, 8.1, 8.12, 8.14, 8.16, 8.18, 8.2, 8.22, 8.24, 8.26, 8.28, 8.3, 8.32, 8.34, 8.36, 8.38, 8.4, 8.42, 8.44, 8.46, 8.48, 8.5, 8.52, 8.54, 8.56, 8.58, 8.6, 8.62, 8.64, 8.66, 8.68, 8.7, 8.72, 8.74, 8.76, 8.78, 8.8, 8.82, 8.84, 8.86, 8.88, 8.9, 8.92, 8.94, 8.96, 8.98, 9, 9.02, 9.04, 9.06, 9.08, 9.1, 9.12, 9.14, 9.16, 9.18, 9.2, 9.22, 9.24, 9.26]; 
var bolaX = [1.000, 1.050, 1.100, 1.149, 1.199, 1.248, 1.298, 1.347, 1.396, 1.445, 1.494, 1.543, 1.591, 1.640, 1.688, 1.736, 1.784, 1.832, 1.880, 1.928, 1.975, 2.023, 2.070, 2.117, 2.165, 2.212, 2.258, 2.305, 2.352, 2.398, 2.444, 2.490, 2.536, 2.582, 2.628, 2.674, 2.719, 2.765, 2.810, 2.855, 2.900, 2.945, 2.989, 3.034, 3.078, 3.123, 3.167, 3.211, 3.255, 3.298, 3.342, 3.385, 3.429, 3.472, 3.515, 3.558, 3.601, 3.643, 3.686, 3.728, 3.770, 3.812, 3.854, 3.896, 3.937, 3.979, 4.020, 4.061, 4.102, 4.143, 4.184, 4.225, 4.265, 4.305, 4.346, 4.386, 4.425, 4.465, 4.505, 4.544, 4.583, 4.622, 4.661, 4.700, 4.739, 4.777, 4.816, 4.854, 4.892, 4.930, 4.967, 5.005, 5.042, 5.080, 5.117, 5.154, 5.190, 5.227, 5.264, 5.300, 5.336, 5.372, 5.408, 5.444, 5.479, 5.514, 5.550, 5.585, 5.620, 5.654, 5.689, 5.723, 5.757, 5.792, 5.825, 5.859, 5.893, 5.926, 5.959, 5.992, 6.025, 6.058, 6.091, 6.123, 6.155, 6.188, 6.219, 6.251, 6.283, 6.314, 6.345, 6.376, 6.407, 6.438, 6.469, 6.499, 6.529, 6.559, 6.589, 6.619, 6.648, 6.678, 6.707, 6.736, 6.765, 6.793, 6.822, 6.850, 6.878, 6.906, 6.934, 6.962, 6.989, 7.016, 7.043, 7.070, 7.097, 7.123, 7.150, 7.176, 7.202, 7.228, 7.253, 7.279, 7.304, 7.329, 7.354, 7.379, 7.403, 7.427, 7.452, 7.476, 7.499, 7.523, 7.546, 7.570, 7.593, 7.615, 7.638, 7.660, 7.683, 7.705, 7.727, 7.748, 7.770, 7.791, 7.812, 7.833, 7.854, 7.875, 7.895, 7.915, 7.935, 7.955, 7.975, 7.994, 8.013, 8.032, 8.051, 8.070, 8.088, 8.106, 8.124, 8.142, 8.160, 8.177, 8.194, 8.211, 8.228, 8.245, 8.261, 8.278, 8.294, 8.309, 8.325, 8.340, 8.356, 8.371, 8.386, 8.400, 8.415, 8.429, 8.443, 8.457, 8.470, 8.484, 8.497, 8.510, 8.522, 8.535, 8.547, 8.559, 8.571, 8.583, 8.595, 8.606, 8.617, 8.628, 8.639, 8.649, 8.659, 8.669, 8.679, 8.689, 8.698, 8.707, 8.716, 8.725, 8.734, 8.742, 8.750, 8.758, 8.766, 8.773, 8.780, 8.787, 8.794, 8.801, 8.807, 8.813, 8.819, 8.825, 8.830, 8.836, 8.841, 8.845, 8.850, 8.854, 8.859, 8.863, 8.866, 8.870, 8.873, 8.876, 8.879, 8.882, 8.884, 8.886, 8.888, 8.890, 8.891, 8.892, 8.893, 8.894, 8.895, 8.895, 8.895, 8.895, 8.895, 8.894, 8.893, 8.892, 8.891, 8.889, 8.887, 8.885, 8.883, 8.881, 8.878, 8.875, 8.872, 8.869, 8.865, 8.861, 8.857, 8.853, 8.848, 8.843, 8.838, 8.833, 8.827, 8.822, 8.816, 8.809, 8.803, 8.796, 8.789, 8.782, 8.774, 8.767, 8.759, 8.751, 8.742, 8.734, 8.725, 8.716, 8.706, 8.696, 8.687, 8.676, 8.666, 8.655, 8.645, 8.633, 8.622, 8.610, 8.599, 8.586, 8.574, 8.561, 8.549, 8.535, 8.522, 8.508, 8.495, 8.480, 8.466, 8.451, 8.437, 8.421, 8.406, 8.390, 8.374, 8.358, 8.342, 8.325, 8.308, 8.291, 8.274, 8.256, 8.238, 8.220, 8.201, 8.183, 8.164, 8.144, 8.125, 8.105, 8.085, 8.065, 8.044, 8.023, 8.002, 7.981, 7.959, 7.938, 7.915, 7.893, 7.870, 7.847, 7.824, 7.801, 7.777, 7.753, 7.729, 7.704, 7.679, 7.654, 7.629, 7.603, 7.578, 7.551, 7.525, 7.498, 7.471, 7.444, 7.417, 7.389, 7.361, 7.333, 7.304, 7.275, 7.246, 7.217, 7.187, 7.157, 7.127, 7.096, 7.065, 7.034, 7.003, 6.971, 6.940, 6.907, 6.875, 6.842, 6.809, 6.776, 6.742, 6.708, 6.674, 6.640, 6.605, 6.570, 6.535, 6.500, 6.464, 6.428, 6.391, 6.355, 6.318, 6.280, 6.243, 6.205, 6.167, 6.128, 6.090, 6.051, 6.012, 5.972, 5.932, 5.892, 5.852, 5.811, 5.770, 5.729, 5.687, 5.645, 5.603, 5.561, 5.518, 5.475, 5.432, 5.388, 5.344, 5.300, 5.255, 5.211, 5.166, 5.120, 5.074, 5.029, 4.982, 4.936];
var bolaY = [0.500, 0.536, 0.572, 0.607, 0.643, 0.678, 0.713, 0.748, 0.783, 0.818, 0.852, 0.886, 0.920, 0.954, 0.988, 1.022, 1.056, 1.089, 1.122, 1.155, 1.188, 1.221, 1.253, 1.286, 1.318, 1.350, 1.382, 1.414, 1.445, 1.477, 1.508, 1.539, 1.570, 1.601, 1.632, 1.662, 1.692, 1.722, 1.752, 1.782, 1.812, 1.842, 1.871, 1.900, 1.929, 1.958, 1.987, 2.015, 2.044, 2.072, 2.100, 2.128, 2.156, 2.183, 2.211, 2.238, 2.265, 2.292, 2.319, 2.346, 2.372, 2.398, 2.424, 2.450, 2.476, 2.502, 2.528, 2.553, 2.578, 2.603, 2.628, 2.653, 2.677, 2.702, 2.726, 2.750, 2.774, 2.798, 2.821, 2.845, 2.868, 2.891, 2.914, 2.937, 2.960, 2.982, 3.004, 3.026, 3.048, 3.070, 3.092, 3.114, 3.135, 3.156, 3.177, 3.198, 3.219, 3.239, 3.260, 3.280, 3.300, 3.320, 3.340, 3.359, 3.379, 3.398, 3.417, 3.436, 3.455, 3.474, 3.492, 3.510, 3.528, 3.546, 3.564, 3.582, 3.600, 3.617, 3.634, 3.651, 3.668, 3.685, 3.701, 3.718, 3.734, 3.750, 3.766, 3.782, 3.797, 3.813, 3.828, 3.843, 3.858, 3.873, 3.888, 3.902, 3.916, 3.930, 3.944, 3.958, 3.972, 3.986, 3.999, 4.012, 4.025, 4.038, 4.051, 4.063, 4.076, 4.088, 4.100, 4.112, 4.124, 4.135, 4.147, 4.158, 4.169, 4.180, 4.191, 4.202, 4.212, 4.222, 4.232, 4.242, 4.252, 4.262, 4.272, 4.281, 4.290, 4.299, 4.308, 4.317, 4.325, 4.334, 4.342, 4.350, 4.358, 4.366, 4.373, 4.381, 4.388, 4.395, 4.402, 4.409, 4.416, 4.422, 4.428, 4.434, 4.440, 4.446, 4.452, 4.458, 4.463, 4.468, 4.473, 4.478, 4.483, 4.487, 4.492, 4.496, 4.500, 4.504, 4.508, 4.511, 4.515, 4.518, 4.521, 4.524, 4.527, 4.530, 4.532, 4.534, 4.536, 4.538, 4.540, 4.542, 4.544, 4.545, 4.546, 4.547, 4.548, 4.549, 4.549, 4.550, 4.550, 4.550, 4.550, 4.550, 4.549, 4.549, 4.548, 4.547, 4.546, 4.545, 4.544, 4.542, 4.540, 4.538, 4.536, 4.534, 4.532, 4.530, 4.527, 4.524, 4.521, 4.518, 4.515, 4.511, 4.508, 4.504, 4.500, 4.496, 4.492, 4.487, 4.483, 4.478, 4.473, 4.468, 4.463, 4.458, 4.452, 4.446, 4.440, 4.434, 4.428, 4.422, 4.416, 4.409, 4.402, 4.395, 4.388, 4.381, 4.373, 4.366, 4.358, 4.350, 4.342, 4.334, 4.325, 4.317, 4.308, 4.299, 4.290, 4.281, 4.272, 4.262, 4.252, 4.242, 4.232, 4.222, 4.212, 4.202, 4.191, 4.180, 4.169, 4.158, 4.147, 4.135, 4.124, 4.112, 4.100, 4.088, 4.076, 4.063, 4.051, 4.038, 4.025, 4.012, 3.999, 3.986, 3.972, 3.958, 3.944, 3.930, 3.916, 3.902, 3.888, 3.873, 3.858, 3.843, 3.828, 3.813, 3.797, 3.782, 3.766, 3.750, 3.734, 3.718, 3.701, 3.685, 3.668, 3.651, 3.634, 3.617, 3.600, 3.582, 3.564, 3.546, 3.528, 3.510, 3.492, 3.474, 3.455, 3.436, 3.417, 3.398, 3.379, 3.359, 3.340, 3.320, 3.300, 3.280, 3.260, 3.239, 3.219, 3.198, 3.177, 3.156, 3.135, 3.114, 3.092, 3.070, 3.048, 3.026, 3.004, 2.982, 2.960, 2.937, 2.914, 2.891, 2.868, 2.845, 2.821, 2.798, 2.774, 2.750, 2.726, 2.702, 2.677, 2.653, 2.628, 2.603, 2.578, 2.553, 2.528, 2.502, 2.476, 2.450, 2.424, 2.398, 2.372, 2.346, 2.319, 2.292, 2.265, 2.238, 2.211, 2.183, 2.156, 2.128, 2.100, 2.072, 2.044, 2.015, 1.987, 1.958, 1.929, 1.900, 1.871, 1.842, 1.812, 1.782, 1.752, 1.722, 1.692, 1.662, 1.632, 1.601, 1.570, 1.539, 1.508, 1.477, 1.445, 1.414, 1.382, 1.350, 1.318, 1.286, 1.253, 1.221, 1.188, 1.155, 1.122, 1.089, 1.056, 1.022, 0.988, 0.954, 0.920, 0.886, 0.852, 0.818, 0.783, 0.748, 0.713, 0.678, 0.643, 0.607, 0.572, 0.536, 0.500, 0.464, 0.428, 0.391, 0.355, 0.318, 0.281, 0.244, 0.207, 0.170, 0.132, 0.094, 0.056, 0.018];


var distRoboBola = [];
var tempoInterceptado = [];

//robo
var roboX = [];
var roboY = [];
var rVelocidadeX = [];
var rVelocidadeY = [];
var rAceleracaoX = [];
var rAceleracaoY = [];

//bola
var bolaInterceptadaX = [];
var bolaInterceptadaY = [];
var bVelInterceX = [];
var bVelInterceY = [];
var bAcelIntercX = [];
var bAcelIntercY = [];

var cos = 0, sen = 0, aceleracao = 0.32, raio = 1.0;
var i = 0;
var roboRx = [];
var roboRy = [];

var rx;
var ry;
var bolaBx;
var bolaBy;


// //função para:
// /*1 - pegar o x e y que estão na URL gerados pela página main 
// 2 - jogar na caixa de texto */
// function GetQueryString(a)
// {
//     a = a || window.location.search.substr(1).split('&').concat(window.location.hash.substr(1).split("&"));

//     if (typeof a === "string")
//         a = a.split("#").join("&").split("&");

//     // se não há valores, retorna um objeto vazio
//     if (!a) return {};

//     var b = {};
//     for (var i = 0; i < a.length; ++i)
//     {
//         // obtem array com chave/valor
//         var p = a[i].split('=');

//         // se não houver valor, ignora o parametro
//         if (p.length != 2) continue;

//         // adiciona a propriedade chave ao objeto de retorno
//         // com o valor decodificado, substituindo `+` por ` `
//         // para aceitar URLs codificadas com `+` ao invés de `%20`
//         b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
//     }
//     // retorna o objeto criado
//     return b;
// }


function recarrega() {
    location.reload()
}


function distancia0(){

    roboX[0] = Number(document.getElementById("x").value);
    roboY[0] = Number(document.getElementById("y").value);

    distRoboBola[0] = Math.sqrt(Math.pow((bolaX[0] - roboX[0]), 2) + Math.pow((bolaY[0] - roboY[0]), 2));

	if(distRoboBola[0] <= 1.0){
        window.alert("O robo está sendo colocado perto da bola!")
    }
}


function andaRobo(){
    do{
        distRoboBola[i] = Math.sqrt(Math.pow((bolaX[i] - roboX[i]), 2) + Math.pow((bolaY[i] - roboY[i]), 2));
        cos = (bolaX[i] - roboX[i]) / distRoboBola[i];
        sen = (bolaY[i] - roboY[i]) / distRoboBola[i];

        if(tempo[i] <= 4.0){
            /*                           decompondo o vetor aceleracao em x e y     */
            rAceleracaoX[i] = aceleracao * cos;
            rAceleracaoY[i] = aceleracao * sen;

            /*            achando a velocidade até 4s com   v = v + a*t           */
            rVelocidadeX[0] = 0;
            rVelocidadeX[i+1] = rVelocidadeX[i] + (rAceleracaoX[i] * tempo[i]);
            rVelocidadeY[0] = 0;
            rVelocidadeY[i+1] = rVelocidadeY[i] + (rAceleracaoY[i] * tempo[i]);

            /*                 utilizando função horária da posição em função do tempo 	pois o movimento eh uniformemente variado até 4s 
            s = s0 + v0 + 0,5at²                   */	
            roboX[i+1] = roboX[i] + (rVelocidadeX[i] * tempo[i]) + (0.5 * (rAceleracaoX[i] * (tempo[i] * tempo[i])));
            roboY[i+1] = roboY[i] + (rVelocidadeY[i] * tempo[i]) + (0.5 * (rAceleracaoY[i] * (tempo[i] * tempo[i])));
        }else{
            /*               depois que o robo atingir a velocidade maxima em 4s o movimento passa a ser uniforme
			entao s = s0 + v * DELTAtempo              */

            //decompondo a velocidade constante (2.34) em x e y
            rVelocidadeX[i] = 2.34 * cos;
            rVelocidadeY[i] = 2.34 * sen;


            //usando na funcao horaria de deslocamento
            roboX[i+1] = roboX[i] + (rVelocidadeX[i] * 0.02);
            roboY[i+1] = roboY[i] + (rVelocidadeY[i] * 0.02);



        }
    	
        /*        GERANDO GRAFICOS         */
		
		/* temos a equação de x(t) e y(t) da bola
		    x(t) velocidade : 2*-0.2611*tempo + 2,911  
			x(t) aceleracao : 2*-0.2611
			
			y(t) velocidade : 2*-0,2*tempo + 1,8
            y(t) aceleracao : 2*-0,2    */
            
        bVelInterceX[i] = (2 * -0.2611 * tempo[i]) + 2.911;
        bVelInterceY[i] = (2 * -0.2 * tempo[i]) + 1.8;
        
        bAcelIntercX[i] = (2 * -0.2611);
        bAcelIntercY[i] = (2 * -0.2)
        
        
        /*      PARA SABER ATÉ QUAL PONTO A BOLA FOI INTERCEPTADA  
                            E EM QUAL TEMPO */
        bolaInterceptadaX[i] = bolaX[i];
        bolaInterceptadaY[i] = bolaY[i];
        tempo[i] = tempo[i];
        bolaBx = bolaX[i]
        bolaBy = bolaY[i];
        roboRx[i] = roboX[i+1];
        roboRy[i] = roboY[i+1];
        rx = roboX[i+1];
        ry = roboY[i+1];
	    i++;
    }while(distRoboBola[i-1] >= raio);
}
console.log(distRoboBola)
console.log(roboX)
console.log(roboY)

//A função abaixo gera o gráfico da trajetória da bola e robô até o momento de interceptação
function grafico1(){
    var linha1 = {
        x: roboRx,
        y: roboRy,

        name:'Trajeto do robô',
        mode: 'lines+markers',
        line: {
            color: 'rgb(140, 122, 230)',
            width: 1,	
        }
    };

    var linha2 = {
        x: bolaInterceptadaX,
        y: bolaInterceptadaY,
        name: 'Trajeto da bola',
        mode: 'lines+markers',
        line: {
            color: 'rgb(120, 224, 143)',
            width: 1,
        }
    };

    var bola1 ={
        x: [bolaBx],
        y: [bolaBy],
        mode: 'markers',
        type: 'scatter',
        name: 'Bola',
        textposition: 'top center',
        marker: {
            size: 20,
            opacity: 0.2,

        }
    };

    var robo1 = {
        x: [rx],
        y: [ry],
        mode: 'markers',
        type: 'scatter',
        name: 'Robo',
        textposition: 'top center',
        marker: {
            size: 20,
            opacity: 0.2,
            color: 'rgb(140, 122, 230)',
        }
    }

    var data = [linha2, linha1, bola1, robo1];
	
    var layout = {
        title:'Trajetórias da bola e robô até o ponto interceptado',
		xaxis: {
            title: 'x', 
            range: [0, 9],
		}, 
		yaxis: {
            title: 'y',
            range: [0, 6],
        },
        images:[
            {
                'source' : 'https://static.vecteezy.com/system/resources/previews/000/104/368/non_2x/free-soccer-field-vector.jpg',
                "xref" : "x",
                "yref" : "y",
                "x" : -0.7,
                "y" : 6.8,
                "sizex" : 10.6,
                "sizey" : 7.8,
                "sizing" : "stretch",
                "opacity": 0.1,
                "layer" : "below"
            }
        ]
}; 

    Plotly.newPlot('myChart', data, layout);
}

//A função abaixo gera o gráfico da trajetória da bola até a interceptação com x e y em função do tempo
function grafico2(){
    var linha1 = {
        x: tempo,
        y: bolaInterceptadaX,
        name: 'Bola X(t)',
        mode: 'lines+markers',
        line: {
            color: 'rgb(183, 21, 64)',
            width: 1
        }
    };

    var linha2 = {
        x: tempo,
        y: bolaInterceptadaY,
        name: 'Bola Y(t)',
        mode: 'lines+markers',
        line: {
            color: 'rgb(183, 21, 64)',
            width: 1
        }
    };
	
	var linha3 = {
        x: tempo,
        y: roboX,
        name: 'Robô X(t)',
        mode: 'lines+markers',
        line: {
            color: 'rgb(33, 150, 243)',
            width: 1
        }
    };

    var linha4 = {
        x: tempo,
        y: roboY,
        name: 'Robô Y(t)',
        mode: 'lines+markers',
        line: {
            color: 'rgb(33, 150, 243)',
            width: 1
        }
    };

    var data = [linha1, linha2, linha3, linha4];

    var layout = {
        title:'Trajetórias da bola e robô até a interceptação nas componentes X(t) e Y(t)',
		xaxis: {
			title: 'Tempo(s)', 
		}, 
		yaxis: {
			title: 'Trajetórias nas componentes X e Y',
		}
    };

    Plotly.newPlot('myChart', data, layout);
}

//A função abaixo gera o gráfico da velocidade robô em com x e y em função do tempo
function grafico3(){
	var linha1 = {
    x: tempo,
    y: rVelocidadeX,
    name: 'Vel. robô X(t)',
    mode: 'lines+markers',
    line: {
        color: 'rgb(116, 125, 140)',
        width: 1
        }
    };

    var linha2 = {
        x: tempo,
        y: rVelocidadeY,
        name: 'Vel. robô Y(t)',
        mode: 'lines+markers',
        line: {
            color: 'rgb(116, 125, 140)', 
            width: 1
    }
};

	 var linha3 = {
        x: tempo,
        y: bVelInterceX,
        name: 'Vel. bola X(t)',
        mode: 'lines+markers',
        line: {
        color: 'rgb(113, 88, 226)', 
        width: 1
	}
};

	var linha4 = {
        x: tempo,
        y: bVelInterceY,
        name: 'Vel. bola Y(t)',
        mode: 'lines+markers',
        line: {
        color: 'rgb(113, 88, 226)', 
        width: 1
        }
};

    var data = [linha1, linha2, linha3, linha4];

	var layout = {
    title:'Velocidades da bola e do robô com X(t) e Y(t) ',
	xaxis: {
		title: 'Tempo (s)', 
	}, 
	yaxis: {
		title: 'Velocidade em (m/s)',
	}
};

Plotly.newPlot('myChart', data, layout);
}

function grafico4(){
    var linha1 = {
        x: tempo,
        y: rAceleracaoX,
        name: 'Ac. robô X(t)',
        mode: 'lines+markers',
        line: {
            color: 'rgb(255, 242, 0)',    
            width: 1
        }
    };

    var linha2 = {
        x: tempo,
        y: rAceleracaoY,
        name: 'Ac. robô Y(t)',
        mode: 'lines+markers',
        line: {
            color: 'rgb(255, 242, 0)',
            width: 1
        }
    };
	
	var linha3 = {
    x: tempo,
    y: bAcelIntercX,
    name: 'Ac. bola X(t)',
    mode: 'lines+markers',
    line: {
        color: 'rgb(87, 75, 144)',
        width: 1
        }
    };

    var linha4 = {
        x: tempo,
        y: bAcelIntercY,
        name: 'Ac. bola Y(t)',
        mode: 'lines+markers',
        line: {
            color: 'rgb(87, 75, 144)',
            width: 1
        }
    };


    var data = [linha1, linha2, linha3, linha4];

    var layout = {
        title:'Aceleração da bola e robô com X(t) e Y(t) ',

		xaxis: {
			title: 'Tempo em (s)', 
		}, 
		yaxis: {
			title: 'Aceleração em (m/s)',
		}
    };

    Plotly.newPlot('myChart', data, layout);
}

function grafico5(){
    var linha1 = {
        x: tempo,
        y: distRoboBola,
        name: 'Distância',
        mode: 'lines+markers',
        line: {
            color: 'rgb(52, 172, 224)',
            width: 1
        }
    };

    var data = [linha1];

    var layout = {
        title:'Distância entre o robô e a bola até a interceptação em função do tempo  ',

		xaxis: {
			title: 'Tempo (s)', 
		}, 
		yaxis: {
			title: 'Distância entre a bola e o robô (m/s)',
		}
    };

    Plotly.newPlot('myChart', data, layout);
}

function trajBola(){
    var traj = {
        x: bolaX,
        y: bolaY,
        mode: 'lines+makers',
        line:{
            color: 'red',
            width: 1
        }
    };

    var data = [traj];

    var layout = {
        title: 'Trajetória da Bola',

        xaxis: {
            title: 'x(t)', 
            range: [0, 9],
		}, 
		yaxis: {
            title: 'y(t)',
            range: [0, 6],
        },
        images:[
            {
                'source' : 'https://static.vecteezy.com/system/resources/previews/000/104/368/non_2x/free-soccer-field-vector.jpg',
                "xref" : "x",
                "yref" : "y",
                "x" : -0.7,
                "y" : 6.8,
                "sizex" : 10.6,
                "sizey" : 7.8,
                "sizing" : "stretch",
                "opacity": 0.1,
                "layer" : "below"
            }
        ]
    };

    Plotly.newPlot('myChart', data, layout);
}

function info(){
    var titulo = 'INFORMAÇÕES';
    var subtitulo = '<b><center>Equações da bola </b></center>';
    var x = '<b> Posição em x(t) </b> = -0,2611x² + 2,9112x + 0,6844';
    var y = '<b> Posicao em y(t) </b> = -0,2x² + 1,8x + 0,5';
    var div = document.getElementById("info");

    div.innerHTML = "<h1>" + titulo + "</h1>" + "<br>" + subtitulo + "<br>" + x + "<br>"+ y;



}



document.getElementById("x").value = GetQueryString()["x0"];
document.getElementById("y").value = GetQueryString()["y0"];
