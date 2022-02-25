-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-02-2022 a las 00:29:24
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `extranet_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subtareas`
--

CREATE TABLE `subtareas` (
  `id_subtarea` int(100) NOT NULL,
  `titulo_subtarea` varchar(100) NOT NULL,
  `descp_tarea` varchar(100) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `id_tarea` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `subtareas`
--

INSERT INTO `subtareas` (`id_subtarea`, `titulo_subtarea`, `descp_tarea`, `fecha_creacion`, `id_tarea`) VALUES
(1, 'definir', 'definir campos', '2022-02-25', 2),
(2, 'teclear ', 'teclear campos', '2022-02-23', 2),
(3, 'aprender', 'aprender sql', '2022-02-25', 3),
(4, 'explicar', 'explicar a sergi sql', '2022-02-25', 3),
(5, 'pedir mas press', 'pedir presupuestos industriales', '2022-02-25', 6),
(6, 'escoger ', 'escoger i entrar presupustos', '2022-02-25', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `id_tarea` int(11) NOT NULL,
  `titulo_tarea` varchar(100) NOT NULL,
  `descp_tarea` varchar(100) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`id_tarea`, `titulo_tarea`, `descp_tarea`, `fecha_creacion`, `id_usuario`) VALUES
(1, 'Llevar pintor', 'Llevar pinto i repasos de obra tartera', '2022-02-25', 1),
(2, 'Tabla sql ', 'crear tabla sql', '0000-00-00', 1),
(3, 'Hacer sql', 'entrar i relacionar tablas ', '2022-02-25', 2),
(4, 'harware', 'arreglar ordenadores', '2022-02-25', 2),
(5, 'llamar cliente', 'llamar a isi costa por el asunto de una obra ', '2022-02-25', 3),
(6, 'presupuesto', 'acabar presupuesto obra barcelona', '2022-02-25', 3),
(7, 'Llevar pintor', 'Llevar pinto i repasos de obra tartera', '2022-02-25', 1),
(8, 'Tabla sql ', 'crear tabla sql', '0000-00-00', 1),
(9, 'Hacer sql', 'entrar i relacionar tablas ', '2022-02-25', 2),
(10, 'harware', 'arreglar ordenadores', '2022-02-25', 2),
(11, 'llamar cliente', 'llamar a isi costa por el asunto de una obra ', '2022-02-25', 3),
(12, 'presupuesto', 'acabar presupuesto obra barcelona', '2022-02-25', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `telf` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellidos`, `fecha_creacion`, `username`, `password`, `telf`, `email`) VALUES
(1, 'Sergi', 'Reus', '2022-02-23', 'rdiaz', 'rdiaz', '676443322', 'sergi@reuscontrccions.com'),
(2, 'Rodrigo', 'Diaz', '2022-02-23', 'rdiaz', 'rdiaz', '698342312', 'rodridamigonza12@gmail.com'),
(3, 'Xavier', 'Reus', '2022-02-15', 'xreus', 'xreus', '656336716', 'xavier@reuscontruccions.com'),
(4, 'Sergi', 'Reus', '2022-02-23', 'rdiaz', 'rdiaz', '676443322', 'sergi@reuscontrccions.com'),
(5, 'Rodrigo', 'Diaz', '2022-02-23', 'rdiaz', 'rdiaz', '698342312', 'rodridamigonza12@gmail.com'),
(6, 'Xavier', 'Reus', '2022-02-15', 'xreus', 'xreus', '656336716', 'xavier@reuscontruccions.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `subtareas`
--
ALTER TABLE `subtareas`
  ADD PRIMARY KEY (`id_subtarea`),
  ADD KEY `id_tarea` (`id_tarea`);

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`id_tarea`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `subtareas`
--
ALTER TABLE `subtareas`
  MODIFY `id_subtarea` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `id_tarea` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `subtareas`
--
ALTER TABLE `subtareas`
  ADD CONSTRAINT `subtareas_ibfk_1` FOREIGN KEY (`id_tarea`) REFERENCES `tareas` (`id_tarea`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD CONSTRAINT `tareas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
