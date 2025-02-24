# Frontend (React + librerias)

## hooks:

### Reglas generales:

    1. Los hooks se llaman siempre desde el nivel superior:  no se deben pasar dentro de condicionales, bucles o funciones anidadas o bloques try/catch/finally. <u> Hay que usarlos en el nivel mas alto <u> de tu funcion react. Solo puedes llamar a los hooks mientras se esta renderizando un <u> componente funcional <u>
    
    2. Es posible llamarlos desde custom hooks, porque estos son llamados minetras se renderiza un <u>componente funcional <u>

    3. No llamarlos desde funciones normales de JS


## useState:

    -Permite agregar una variable de estado a tu componente | ** VARIABLES SIMPLES**
```jsx
    const [state, setState] = useState(initialState)
```
#### Usos:
    - Agregar estados a un componente
    - Actualizar estado con base al estado anteror | Actualización de objetos y arrays.
    - Evitar recrear el estado inicial
    - Reinicio del estado con una key

## usEffect:

    - Te permite sincronizar un componente con un sistema externo como una API mientras muestra la pagina. (como un chat dentro de la pagina)
    - Ejecuta codigo despues del render | ** SIDEEFFECT**
    
```jsx

useEffect(() => {
    return () => {
    };
}, [dependencias]);

```
    - Las dependencias, son valores que react vigila para determinar cuando debe volver a ejecutar el efecto    
        - Actualizacion condicional del efecto: Si alguna de las variables listadas en el array de dependencias cambia entre renderizados, React reejecuta el efecto
        - Array Vacio ([]): Si se pasa vacio el array indica que debe ejecutarse una vez

## useContext:
    
    -Permite acceder a valores almacenados en un "Contexto" son necesidad de pasar props | **SHARE STATES BTW COMPONENTS**
    
```jsx
    import { useContext } from 'react';

    function MyComponent() {
        const theme = useContext(ThemeContext);
```
    - Reduce el uso de props inecesarios
    - Facilita la gestión de datos compartida

## useRef:

    - Permite almacenar valores persistentes y evitar renderizados inecesarios | **PERSISTENCIA**
```jsx
    const ref = useRef(initialValue)
```
## useReducer:

    - Maneja el estado (como useState) cuando es mas complejo o tiene varias "actualizaciones" relacionadas | **COMPLEX VOLUMEN**
    - Uso:
        - Cuando el estado tiene multiples subvalores que se actualizarn juntos
        - Cuando los cambios dependen de un estado previo
        - Cuando la logica es compleja
```jsx
const [state, dispatch] = useReducer (reducer, initialArg, init?)
```
    - Centraliza la logica de la actualizacion del estado
    - Mejor que userState para estados complejos
    - El estado cambia a traves del dispatch, por lo que es mas previsible
    - DISPATCH envia acciones y actualiza el estado

## useMemo:

    - Memoriza el resultado de una funciona para evitar calculos inecesarios cada renderizacion | **MEMORIA EFICIENTE**
        - optimiza el rendimiento evitando calculos inecesarios
        - Evita renders inecesarios
```jsx
  const cachedValue = useMemo(calculateValue, dependencies)
```
    -Recibe dos argumentos:
        1. una funcion que retorna un valor calculado
        2. un array de dependencias que indica cuando debe recalcular el valor
    - Devuelve el valor memorizado en la cache hasta que cambie alguna dependencia             

# Ciclo del Render:

###    1. Trigger (disparador del Render)
    - Puede ser provocado por:
        - Cambio de estado (useState, useReducer)
        - Cambio en las props que recibe el componente
        - Cambio de contexto (useContext)
    - Cuando ocurre el trigger inicia el proceso de renderizado
###     2. Render (Reconciliacion y Virtual DOM)
    - React crea el nuevo Virtual DOM y compara los cambios con el DOM anterior (reconciliación)
        - React ejecuta la funcion del componente (jsx elementos react)
        - Contruye el nuevo VDOM
        - Compara el nuevo   VDOM con el anterior y determina cambios necesarios
    - **EN ESTA FASE NO SE MODIFICA EL DOM**
###     3. Commit (Actualización del DOM y efectos secundarios)

    - Se aplican cambios en el DOM **REAl**
    - Se ejecutan los efectos secundarios (useEffect)
    - Se activan ref y callbacks de finalización

### RESUMEN:
    
    1. Trigger: Algo cambia(setState, props, context)
    2. Render : Compara Virtual DOM nuevo con el anterior
    3. Commit: React actualiza el DOM REAL y ejecuta efectos secundarios


## DOM (Document Object Model):
    
    - Representa el documento HTML como estructura de arbol
    - permite modificar el contenido y estilo de la pagina en tiempo real


## Virtual DOM :

    - El V DOM es una representacion en memoria del DOM real
    - En lugar de actualizar el DOM directamente, React hace cambios en el VDOM y luego los compara con el DOM (reconciliación) actualiza solo lo que ha cambiado
    - El DOM real es lento de manipular, por lo que el VDOM acelera el proceso al hacer la mayoria de porcesos en memoria y solo cambia lo necesario
        - Mejora rendimiento
        - Reduce re-renderizados
        - Eficiencia



# LIBRERIAS:

## React Router DOM

    - Permite la navegación entre paguinas de una aplicación sin recargar la pagina completa 
    - Usa URLs dinámicas para renderizar componentes segun la ruta
    - Maneja parametros de ruta, soporta rutas anidadas y protegidas (solo se muestran si estas autenticado)
    - **Evita recargas innecesarias**
```jsx
<Router>
      <nav>
        <Link to="/">Inicio</Link> | 
        <Link to="/about">Acerca de</Link> | 
        <Link to="/contact">Contacto</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
```     
     
     - Router: envuelve la aplicacion y gestiona la navegacion
     - Link: remplaza a <a> para evitar recargas
     - Routes: define las rutas disponibles

## AXIOS :

    -Facilita la realización de peticiones HTTP en js y React
    - Soporta peticiones : GET,POST,PUT, DELETE...
    - Mas facil de usar que fetch()
    - Se puede usar junto useEffect para obtener datos al montar un componente
    - Maneja respuestas JSON automaticamente

## Material (MUI): 
    - Bibloteca de componentes, implementa el sistema "Material Design" de google
    - Componentes listos para usar (botones, tablas, cuadros de dialogo...)
    - Se pueden personalizar 
    -Responsividad incorporada
    -Diseñado para que sean accesibles
    - Facil mantener una estetica coherente


## Leaflet (Mapas interactivos):

    - Biblioteca open source para crear mapas interactivos
    - Ligera
    - Extensible con plugins y funcionalidades personalizadas
    - Compatible con multiples plataformas

## ESlint Plugin:

    - Analiza y encuentra errores en codigo JS
    - Los plugin son un conjunto de reglas adicionales que se pueden añadir a ESlint para asegurarse que se cumplen las buenas practicas en el proyecto
    - Ayuda a la consistencia del codigo
    - Prevención de errores
    - Mejora las practicas (formato correcto, uso de funciones correctas...)

# Handlers

    - Son funciones que se ejecutan en respuesta a eventos interactivos o acciones del usuario (clics en botones, hovers...)
    - Permiten gestionar y responder a las interacciones del usuario cion la interfaz    
```jsx
function App() {
  const [count, setCount] = useState(0);

  // Handler de clic
  const handleClick = () => {
    setCount(count + 1);  // Incrementa el contador
  };

  return (
    <div>
      <button onClick={handleClick}>Incrementar</button>
      <p>Contador: {count}</p>
    </div>
  );
}
```
## Desestruturación:
    
    - Hacen el codigo mas legible
    - Reduce la repeticion de codigo
```jsx
function Saludo({ nombre, edad }) {
  return (
    <div>
      <h1>Hola, {nombre}!</h1>
      <p>Edad: {edad}</p>
    </div>
```
    - En este caso {nombre, edad} estamos extrayebndo las propiedades de nombre y edad de las props directamente, lo que nos ahorra tiempo y hace el codigo mas limpio

## Spread Operator (...):

    - Permite expandir o desempaquetar los elementos de un objeto o un array
    - Dada la **inmutabilidad** de Ract donde no se modifica directamente el estado o las props, si no que se crean copias nuevas   
```jsx
const numeros = [1, 2, 3];
const copiaNumeros = [...numeros];
```    
    - Puede agregar elementos a un array / Fusionar Arrays/ copiar arrays / copiar objetos / modificar objetos
    - Ayuda a mantener la inmutabilidad
    - Hace el codigo mas **legible**
    - Hace mas facil la fusion de estructuras (arrays y objetos)
    - Facilita la manipulacion de objetos y arrays