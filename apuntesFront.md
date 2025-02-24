# Frontend (React + librerias)

## hooks:

### Reglas generales:

1. Los hooks se llaman siempre desde el nivel superior: no se deben pasar dentro de condicionales, bucles o funciones anidadas o bloques try/catch/finally. Hay que usarlos en el nivel más alto de tu función react. Solo puedes llamar a los hooks mientras se está renderizando un componente funcional.

2. Es posible llamarlos desde custom hooks, porque estos son llamados mientras se renderiza un componente funcional.

3. No llamarlos desde funciones normales de JS.

## useState:

- Permite agregar una variable de estado a tu componente | **VARIABLES SIMPLES**

```jsx
const [state, setState] = useState(initialState)
```

#### Usos:
- Agregar estados a un componente
- Actualizar estado con base al estado anterior | Actualización de objetos y arrays.
- Evitar recrear el estado inicial
- Reinicio del estado con una key

## useEffect:

- Te permite sincronizar un componente con un sistema externo como una API mientras muestra la página. (como un chat dentro de la página)
- Ejecuta código después del render | **SIDEEFFECT**

```jsx
useEffect(() => {
    return () => {
    };
}, [dependencias]);
```

- Las dependencias son valores que react vigila para determinar cuándo debe volver a ejecutar el efecto.
    - Actualización condicional del efecto: Si alguna de las variables listadas en el array de dependencias cambia entre renderizados, React reejecuta el efecto.
    - Array vacío ([]): Si se pasa vacío el array indica que debe ejecutarse una vez.

## useContext:

- Permite acceder a valores almacenados en un "Contexto" sin necesidad de pasar props | **SHARE STATES BTW COMPONENTS**

```jsx
import { useContext } from 'react';

function MyComponent() {
    const theme = useContext(ThemeContext);
}
```

- Reduce el uso de props innecesarios.
- Facilita la gestión de datos compartida.

## useRef:

- Permite almacenar valores persistentes y evitar renderizados innecesarios | **PERSISTENCIA**

```jsx
const ref = useRef(initialValue)
```

## useReducer:

- Maneja el estado (como useState) cuando es más complejo o tiene varias "actualizaciones" relacionadas | **COMPLEX VOLUMEN**

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

- Centraliza la lógica de la actualización del estado.
- Mejor que useState para estados complejos.
- El estado cambia a través del dispatch, por lo que es más previsible.
- DISPATCH envía acciones y actualiza el estado.

## useMemo:

- Memoriza el resultado de una función para evitar cálculos innecesarios cada renderización | **MEMORIA EFICIENTE**

```jsx
const cachedValue = useMemo(calculateValue, dependencies)
```

- Recibe dos argumentos:
    1. Una función que retorna un valor calculado.
    2. Un array de dependencias que indica cuándo debe recalcular el valor.
- Devuelve el valor memorizado en la cache hasta que cambie alguna dependencia.

# Ciclo del Render:

### 1. Trigger (disparador del Render)
- Puede ser provocado por:
    - Cambio de estado (useState, useReducer)
    - Cambio en las props que recibe el componente
    - Cambio de contexto (useContext)
- Cuando ocurre el trigger inicia el proceso de renderizado.

### 2. Render (Reconciliación y Virtual DOM)
- React crea el nuevo Virtual DOM y compara los cambios con el DOM anterior (reconciliación).
    - React ejecuta la función del componente (jsx elementos react).
    - Construye el nuevo VDOM.
    - Compara el nuevo VDOM con el anterior y determina cambios necesarios.
- **EN ESTA FASE NO SE MODIFICA EL DOM**.

### 3. Commit (Actualización del DOM y efectos secundarios)
- Se aplican cambios en el DOM **REAL**.
- Se ejecutan los efectos secundarios (useEffect).
- Se activan ref y callbacks de finalización.

### RESUMEN:
1. Trigger: Algo cambia (setState, props, context).
2. Render: Compara Virtual DOM nuevo con el anterior.
3. Commit: React actualiza el DOM REAL y ejecuta efectos secundarios.

## DOM (Document Object Model):

- Representa el documento HTML como estructura de árbol.
- Permite modificar el contenido y estilo de la página en tiempo real.

## Virtual DOM:

- El VDOM es una representación en memoria del DOM real.
- En lugar de actualizar el DOM directamente, React hace cambios en el VDOM y luego los compara con el DOM (reconciliación) actualiza solo lo que ha cambiado.
- El DOM real es lento de manipular, por lo que el VDOM acelera el proceso al hacer la mayoría de procesos en memoria y solo cambia lo necesario.
    - Mejora rendimiento.
    - Reduce re-renderizados.
    - Eficiencia.

# LIBRERIAS:

## React Router DOM

- Permite la navegación entre páginas de una aplicación sin recargar la página completa.
- Usa URLs dinámicas para renderizar componentes según la ruta.
- Maneja parámetros de ruta, soporta rutas anidadas y protegidas (solo se muestran si estás autenticado).
- **Evita recargas innecesarias**.

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

- Router: envuelve la aplicación y gestiona la navegación.
- Link: reemplaza a `<a>` para evitar recargas.
- Routes: define las rutas disponibles.

## AXIOS:

- Facilita la realización de peticiones HTTP en js y React.
- Soporta peticiones: GET, POST, PUT, DELETE...
- Más fácil de usar que fetch().
- Se puede usar junto useEffect para obtener datos al montar un componente.
- Maneja respuestas JSON automáticamente.

## Material (MUI):

- Biblioteca de componentes, implementa el sistema "Material Design" de Google.
- Componentes listos para usar (botones, tablas, cuadros de diálogo...).
- Se pueden personalizar.
- Responsividad incorporada.
- Diseñado para que sean accesibles.
- Fácil mantener una estética coherente.

## Leaflet (Mapas interactivos):

- Biblioteca open source para crear mapas interactivos.
- Ligera.
- Extensible con plugins y funcionalidades personalizadas.
- Compatible con múltiples plataformas.

## ESLint Plugin:

- Analiza y encuentra errores en código JS.
- Los plugins son un conjunto de reglas adicionales que se pueden añadir a ESLint para asegurarse que se cumplen las buenas prácticas en el proyecto.
- Ayuda a la consistencia del código.
- Prevención de errores.
- Mejora las prácticas (formato correcto, uso de funciones correctas...).

# Handlers

- Son funciones que se ejecutan en respuesta a eventos interactivos o acciones del usuario (clics en botones, hovers...).
- Permiten gestionar y responder a las interacciones del usuario con la interfaz.

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

## Desestructuración:

- Hacen el código más legible.
- Reduce la repetición de código.

```jsx
function Saludo({ nombre, edad }) {
    return (
        <div>
            <h1>Hola, {nombre}!</h1>
            <p>Edad: {edad}</p>
        </div>
    );
}
```

- En este caso {nombre, edad} estamos extrayendo las propiedades de nombre y edad de las props directamente, lo que nos ahorra tiempo y hace el código más limpio.

## Spread Operator (...):

- Permite expandir o desempaquetar los elementos de un objeto o un array.
- Dada la **inmutabilidad** de React donde no se modifica directamente el estado o las props, sino que se crean copias nuevas.

```jsx
const numeros = [1, 2, 3];
const copiaNumeros = [...numeros];
```

- Puede agregar elementos a un array / Fusionar Arrays / copiar arrays / copiar objetos / modificar objetos.
- Ayuda a mantener la inmutabilidad.
- Hace el código más **legible**.
- Hace más fácil la fusión de estructuras (arrays y objetos).
- Facilita la manipulación de objetos y arrays.