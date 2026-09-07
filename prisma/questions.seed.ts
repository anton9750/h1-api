export type Category = "JavaScript" | "Service" | "React";

export interface QuestionSeed {
  category: Category;
  topic: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
}

export const questions: QuestionSeed[] = [
  // ========== JAVASCRIPT - VARIABLER ==========
  { category: "JavaScript", topic: "Variabler", question: "Which keyword is used to declare a block-scoped variable that can be reassigned?", options: ["var", "let", "const", "static"], correctIndex: 1 },
  { category: "JavaScript", topic: "Variabler", question: "What is the difference between `let` and `var` regarding scope?", options: ["`let` is function-scoped, `var` is block-scoped", "`let` is block-scoped, `var` is function-scoped", "They have the same scope", "`var` cannot be reassigned"], correctIndex: 1 },
  { category: "JavaScript", topic: "Variabler", question: "What happens if you access a `let` variable before its declaration?", options: ["It returns undefined", "It returns null", "ReferenceError (Temporal Dead Zone)", "It works fine"], correctIndex: 2 },
  { category: "JavaScript", topic: "Variabler", question: "Which keyword should generally be avoided in modern JavaScript due to function-scoping and hoisting issues?", options: ["let", "const", "var", "static"], correctIndex: 2 },

  // ========== JAVASCRIPT - KONSTANTER ==========
  { category: "JavaScript", topic: "Konstanter", question: "Which keyword creates a variable that cannot be reassigned?", options: ["let", "var", "const", "final"], correctIndex: 2 },
  { category: "JavaScript", topic: "Konstanter", question: "Can you change properties of an object declared with `const`?", options: ["No, objects are immutable with const", "Yes, the reference is constant but properties can change", "Only if you use Object.freeze", "Only in strict mode"], correctIndex: 1 },
  { category: "JavaScript", topic: "Konstanter", question: "What is the best practice when declaring a constant array?", options: ["Use var for arrays", "Use const and mutate with methods like push", "Always use let", "Use const and reassign the whole array"], correctIndex: 1 },
  { category: "JavaScript", topic: "Konstanter", question: "What error is thrown if you try to reassign a `const` variable?", options: ["SyntaxError", "TypeError", "ReferenceError", "No error"], correctIndex: 1 },

  // ========== JAVASCRIPT - BETINGELSE ==========
  { category: "JavaScript", topic: "Betingelse", question: "Which statement is used for conditional execution based on a true/false condition?", options: ["for", "if", "while", "switch only"], correctIndex: 1 },
  { category: "JavaScript", topic: "Betingelse", question: "What does the `else if` clause allow you to do?", options: ["Run code after a loop", "Check multiple conditions in sequence", "Declare a new variable", "Import a module"], correctIndex: 1 },
  { category: "JavaScript", topic: "Betingelse", question: "In an if-else statement, when is the else block executed?", options: ["Always after the if", "When the if condition is true", "When the if condition is false", "Only if there is no return"], correctIndex: 2 },
  { category: "JavaScript", topic: "Betingelse", question: "Which statement is best suited for comparing one variable against many possible fixed values?", options: ["if", "switch", "while", "try"], correctIndex: 1 },

  // ========== JAVASCRIPT - OPERATORS ==========
  { category: "JavaScript", topic: "Operators", question: "What does the `===` operator check?", options: ["Value only", "Type only", "Both value and type (strict equality)", "Reference only"], correctIndex: 2 },
  { category: "JavaScript", topic: "Operators", question: "What is the result of `5 + '5'` in JavaScript?", options: ["10", "'55'", "Error", "NaN"], correctIndex: 1 },
  { category: "JavaScript", topic: "Operators", question: "Which operator is used for logical AND?", options: ["||", "&&", "!", "&"], correctIndex: 1 },
  { category: "JavaScript", topic: "Operators", question: "What does the nullish coalescing operator `??` return?", options: ["The left value if it is falsy", "The right value if the left is null or undefined", "Always the right value", "Always the left value"], correctIndex: 1 },
  { category: "JavaScript", topic: "Operators", question: "What does `typeof NaN` evaluate to?", options: ["'NaN'", "'undefined'", "'number'", "'object'"], correctIndex: 2 },

  // ========== JAVASCRIPT - LOOPS (ITERATION) ==========
  { category: "JavaScript", topic: "Loops (Iteration)", question: "Which loop is best when you know exactly how many times to iterate?", options: ["while", "do-while", "for", "for...in only"], correctIndex: 2 },
  { category: "JavaScript", topic: "Loops (Iteration)", question: "What does `for...of` iterate over?", options: ["Object keys", "Iterable values (arrays, strings, etc.)", "Only numbers", "Function parameters"], correctIndex: 1 },
  { category: "JavaScript", topic: "Loops (Iteration)", question: "Which method is commonly used to iterate over an array and return a new array?", options: ["forEach", "map", "filter only", "reduce only"], correctIndex: 1 },
  { category: "JavaScript", topic: "Loops (Iteration)", question: "Which keyword immediately exits a loop before it finishes?", options: ["continue", "return", "break", "exit"], correctIndex: 2 },

  // ========== JAVASCRIPT - DATATYPER ==========
  { category: "JavaScript", topic: "Datatyper", question: "Which of these is a primitive data type in JavaScript?", options: ["Object", "Array", "String", "Function"], correctIndex: 2 },
  { category: "JavaScript", topic: "Datatyper", question: "What does `typeof null` return in JavaScript?", options: ["'null'", "'undefined'", "'object'", "'number'"], correctIndex: 2 },
  { category: "JavaScript", topic: "Datatyper", question: "Which data type represents a unique and immutable value?", options: ["String", "Symbol", "Number", "Boolean"], correctIndex: 1 },
  { category: "JavaScript", topic: "Datatyper", question: "Which method reliably checks whether a value is an array?", options: ["typeof value === 'array'", "Array.isArray(value)", "value instanceof Object", "value.isArray()"], correctIndex: 1 },

  // ========== JAVASCRIPT - PROMISES ==========
  { category: "JavaScript", topic: "Promises", question: "What are the three states of a Promise?", options: ["start, middle, end", "pending, fulfilled, rejected", "open, closed, error", "loading, success, fail"], correctIndex: 1 },
  { category: "JavaScript", topic: "Promises", question: "Which method is used to handle a successful Promise resolution?", options: [".catch()", ".finally()", ".then()", ".resolve()"], correctIndex: 2 },
  { category: "JavaScript", topic: "Promises", question: "What does `async/await` do with Promises?", options: ["Makes them synchronous always", "Provides syntactic sugar to write async code that looks synchronous", "Removes the need for Promises", "Only works with callbacks"], correctIndex: 1 },
  { category: "JavaScript", topic: "Promises", question: "Which Promise method runs a callback regardless of whether it resolved or rejected?", options: [".then()", ".catch()", ".finally()", ".resolve()"], correctIndex: 2 },

  // ========== JAVASCRIPT - FETCH ==========
  { category: "JavaScript", topic: "Fetch", question: "What does the Fetch API return?", options: ["A string", "A Promise", "An object immediately", "A callback"], correctIndex: 1 },
  { category: "JavaScript", topic: "Fetch", question: "How do you parse a JSON response from fetch?", options: ["response.json()", "JSON.parse(response)", "response.text()", "response.body"], correctIndex: 0 },
  { category: "JavaScript", topic: "Fetch", question: "Which HTTP method does fetch use by default?", options: ["POST", "PUT", "GET", "DELETE"], correctIndex: 2 },
  { category: "JavaScript", topic: "Fetch", question: "How do you send a JSON body with a POST request using fetch?", options: ["fetch(url, { method: 'POST', body: JSON.stringify(data) })", "fetch(url, data)", "fetch.post(url, data)", "fetch(url, { json: data })"], correctIndex: 0 },
  { category: "JavaScript", topic: "Fetch", question: "What happens if the fetch response is not OK (e.g. 404) but you don't check `response.ok`?", options: ["fetch throws automatically", "The promise still resolves normally, you must check the status yourself", "The browser blocks the request", "It retries automatically"], correctIndex: 1 },

  // ========== JAVASCRIPT - DESTRUCTURING ==========
  { category: "JavaScript", topic: "Destructuring", question: "What does array destructuring allow you to do?", options: ["Create a new array", "Unpack values from arrays into distinct variables", "Sort an array", "Filter an array"], correctIndex: 1 },
  { category: "JavaScript", topic: "Destructuring", question: "How do you destructure the property `name` from an object `user`?", options: ["const name = user.name only", "const { name } = user", "const [name] = user", "user.destructure('name')"], correctIndex: 1 },
  { category: "JavaScript", topic: "Destructuring", question: "What is rest syntax used for in destructuring?", options: ["To collect remaining elements into a new array/object", "To stop the process", "To rename variables", "To deep clone"], correctIndex: 0 },
  { category: "JavaScript", topic: "Destructuring", question: "How do you set a default value of 0 while destructuring a property `count`?", options: ["const { count } = obj", "const { count = 0 } = obj", "const count = obj.count ?? default 0", "const { count: 0 } = obj"], correctIndex: 1 },

  // ========== JAVASCRIPT - TERNARY ==========
  { category: "JavaScript", topic: "Ternary", question: "What is the correct syntax for a ternary operator?", options: ["condition ? trueValue : falseValue", "condition : trueValue ? falseValue", "if condition then true else false", "condition && trueValue || falseValue only"], correctIndex: 0 },
  { category: "JavaScript", topic: "Ternary", question: "When should you prefer a ternary over an if-else?", options: ["For complex multi-line logic", "For simple value assignment based on a condition", "Always", "Never, if-else is always better"], correctIndex: 1 },
  { category: "JavaScript", topic: "Ternary", question: "What does this evaluate to: `true ? 'yes' : 'no'`?", options: ["'no'", "'yes'", "true", "undefined"], correctIndex: 1 },
  { category: "JavaScript", topic: "Ternary", question: "Can ternary operators be nested to handle more than two outcomes?", options: ["No, ternaries only support two outcomes", "Yes, but it can hurt readability", "Only inside JSX", "Only with arrow functions"], correctIndex: 1 },

  // ========== SERVICE - HTTP METHODS ==========
  { category: "Service", topic: "HTTP Methods", question: "Which HTTP method is typically used to retrieve data?", options: ["POST", "GET", "PUT", "DELETE"], correctIndex: 1 },
  { category: "Service", topic: "HTTP Methods", question: "Which method is used to create a new resource?", options: ["GET", "POST", "HEAD", "OPTIONS"], correctIndex: 1 },
  { category: "Service", topic: "HTTP Methods", question: "What is the difference between PUT and PATCH?", options: ["They are identical", "PUT replaces the whole resource, PATCH partially updates", "PATCH replaces the whole resource, PUT partially updates", "PUT is for deleting"], correctIndex: 1 },
  { category: "Service", topic: "HTTP Methods", question: "Which HTTP method is idempotent and used to remove a resource?", options: ["POST", "DELETE", "PATCH", "CONNECT"], correctIndex: 1 },
  { category: "Service", topic: "HTTP Methods", question: "Which HTTP method retrieves only the headers of a response, without a body?", options: ["OPTIONS", "HEAD", "TRACE", "GET"], correctIndex: 1 },

  // ========== SERVICE - REQUEST ==========
  { category: "Service", topic: "Request", question: "What does an HTTP request typically contain?", options: ["Only a body", "Method, URL, headers, and optionally a body", "Only headers", "Only status code"], correctIndex: 1 },
  { category: "Service", topic: "Request", question: "Where are query parameters usually placed in a request?", options: ["In the body always", "In the URL after a ?", "In the Authorization header", "In the status line only"], correctIndex: 1 },
  { category: "Service", topic: "Request", question: "What is the purpose of the Content-Type header in a request?", options: ["To set the response status", "To indicate the media type of the request body", "To authenticate the user", "To set the cache policy"], correctIndex: 1 },
  { category: "Service", topic: "Request", question: "Which header tells the server what response format the client can accept?", options: ["Content-Type", "Accept", "Authorization", "Host"], correctIndex: 1 },

  // ========== SERVICE - RESPONSE ==========
  { category: "Service", topic: "Response", question: "What does a status code 200 mean?", options: ["Created", "OK / Success", "Not Found", "Server Error"], correctIndex: 1 },
  { category: "Service", topic: "Response", question: "Which status code indicates that a resource was not found?", options: ["200", "201", "404", "500"], correctIndex: 2 },
  { category: "Service", topic: "Response", question: "What does a 401 status code typically mean?", options: ["Forbidden", "Unauthorized (authentication required)", "Bad Request", "OK"], correctIndex: 1 },
  { category: "Service", topic: "Response", question: "What does a status code in the 500 range generally indicate?", options: ["Client error", "Redirection", "Server error", "Success"], correctIndex: 2 },
  { category: "Service", topic: "Response", question: "Which status code indicates a resource was successfully created?", options: ["200", "201", "204", "301"], correctIndex: 1 },

  // ========== SERVICE - ENDPOINT ==========
  { category: "Service", topic: "Endpoint", question: "What is an API endpoint?", options: ["A database table", "A specific URL where an API can be accessed", "A CSS file", "A React component"], correctIndex: 1 },
  { category: "Service", topic: "Endpoint", question: "In a RESTful API, what does `/users/42` typically represent?", options: ["A list of all users", "The user with ID 42", "Creating a user", "Deleting all users"], correctIndex: 1 },
  { category: "Service", topic: "Endpoint", question: "Why are clear and consistent endpoint naming conventions important?", options: ["They make the API self-documenting and easier to use", "They improve CSS performance", "They are required by browsers", "They only matter for GraphQL"], correctIndex: 0 },
  { category: "Service", topic: "Endpoint", question: "Which combination of method and endpoint would you typically use to delete the user with ID 5?", options: ["GET /users/5", "DELETE /users/5", "POST /users/5/delete", "PUT /users"], correctIndex: 1 },

  // ========== SERVICE - QUERY ==========
  { category: "Service", topic: "Query", question: "What is a query parameter used for?", options: ["To send large binary data", "To filter, sort, or paginate data in a GET request", "To authenticate only", "To set HTTP method"], correctIndex: 1 },
  { category: "Service", topic: "Query", question: "How would you request page 2 with 10 items per page?", options: ["/users?page=2&limit=10", "/users/page/2/limit/10", "In the body of a GET", "Using a POST only"], correctIndex: 0 },
  { category: "Service", topic: "Query", question: "Are query parameters case-sensitive?", options: ["Always case-insensitive", "It depends on the server implementation", "Never used in REST", "Only for POST"], correctIndex: 1 },
  { category: "Service", topic: "Query", question: "Which character separates multiple query parameters in a URL?", options: ["?", "#", "&", "%"], correctIndex: 2 },

  // ========== SERVICE - BEARER TOKEN ==========
  { category: "Service", topic: "Bearer Token", question: "Where is a Bearer token typically sent?", options: ["In the URL query string", "In the Authorization header as 'Bearer <token>'", "In a cookie only", "In the request body always"], correctIndex: 1 },
  { category: "Service", topic: "Bearer Token", question: "What is a common use of Bearer tokens?", options: ["Styling components", "Authenticating API requests (e.g. JWT)", "Defining CSS variables", "Routing in React"], correctIndex: 1 },
  { category: "Service", topic: "Bearer Token", question: "Why should you never store Bearer tokens in localStorage for highly sensitive apps?", options: ["They are too large", "XSS attacks can steal them more easily than httpOnly cookies", "Browsers block localStorage", "They expire too fast"], correctIndex: 1 },
  { category: "Service", topic: "Bearer Token", question: "What does JWT stand for?", options: ["Java Web Token", "JSON Web Token", "JavaScript Web Transfer", "Joint Web Ticket"], correctIndex: 1 },
  { category: "Service", topic: "Bearer Token", question: "Why is it recommended to set an expiration time on Bearer tokens (e.g. JWTs)?", options: ["To reduce file size", "To limit the window an attacker can use a stolen token", "To make requests faster", "Tokens are required to expire by the HTTP spec"], correctIndex: 1 },

  // ========== REACT - COMPONENT ==========
  { category: "React", topic: "Component", question: "What is a React component?", options: ["A CSS class", "A reusable piece of UI that returns JSX", "A database model", "An HTTP method"], correctIndex: 1 },
  { category: "React", topic: "Component", question: "What is the difference between a functional and class component?", options: ["Functional components use hooks, class components use this and lifecycle methods", "There is no difference", "Class components are always faster", "Functional components cannot have state"], correctIndex: 0 },
  { category: "React", topic: "Component", question: "What must a React component return?", options: ["A string only", "Valid JSX (or null)", "An object always", "A Promise"], correctIndex: 1 },
  { category: "React", topic: "Component", question: "What naming convention should React component functions follow?", options: ["camelCase", "snake_case", "PascalCase", "kebab-case"], correctIndex: 2 },
  { category: "React", topic: "Component", question: "What is JSX?", options: ["A CSS preprocessor", "A syntax extension that lets you write HTML-like code in JavaScript", "A database query language", "A testing framework"], correctIndex: 1 },

  // ========== REACT - PROPS ==========
  { category: "React", topic: "Props", question: "What are props in React?", options: ["Internal component state", "Data passed from parent to child component", "CSS styles only", "Event handlers only"], correctIndex: 1 },
  { category: "React", topic: "Props", question: "Are props mutable inside the child component?", options: ["Yes, you can reassign them", "No, props are read-only", "Only if using class components", "Only with useState"], correctIndex: 1 },
  { category: "React", topic: "Props", question: "How do you pass a prop called `title` to a component?", options: ["<Component title='Hello' />", "<Component {title} />", "Component.props.title = 'Hello'", "props(title)"], correctIndex: 0 },
  { category: "React", topic: "Props", question: "Can a child component directly modify the props it receives from its parent?", options: ["Yes, freely", "No, props are read-only from the child's perspective", "Only with useState", "Only in class components"], correctIndex: 1 },

  // ========== REACT - PROPS.CHILDREN ==========
  { category: "React", topic: "Props.children", question: "What does `props.children` contain?", options: ["The component's own state", "The content nested between the opening and closing tags of a component", "All CSS classes", "The parent component"], correctIndex: 1 },
  { category: "React", topic: "Props.children", question: "Why is `children` useful?", options: ["It allows composing components and creating wrappers/layouts", "It replaces useState", "It is required for every component", "It only works with class components"], correctIndex: 0 },
  { category: "React", topic: "Props.children", question: "Can `children` be a function (render prop pattern)?", options: ["No, only elements", "Yes, children can be any valid React node including functions", "Only in React 18+", "Only with TypeScript"], correctIndex: 1 },
  { category: "React", topic: "Props.children", question: "What type of value can `props.children` be?", options: ["Only a single string", "Any valid React node: elements, strings, arrays, or functions", "Only numbers", "Only another component"], correctIndex: 1 },

  // ========== REACT - STYLED COMPONENTS ==========
  { category: "React", topic: "Styled components", question: "What is the main idea behind styled-components?", options: ["Writing CSS in separate .css files only", "Writing CSS-in-JS with tagged template literals tied to components", "Using only Tailwind", "Inline styles with style={{}}"], correctIndex: 1 },
  { category: "React", topic: "Styled components", question: "How do you create a styled button with styled-components?", options: ["const Button = styled.button`...`", "const Button = css.button`...`", "styled(Button)", "new StyledComponent('button')"], correctIndex: 0 },
  { category: "React", topic: "Styled components", question: "What is a key benefit of styled-components?", options: ["Styles are scoped to the component automatically", "It removes the need for React", "It is the only way to style React", "It makes CSS global by default"], correctIndex: 0 },
  { category: "React", topic: "Styled components", question: "How do you extend the styles of an existing styled-component?", options: ["styled(ExistingComponent)`...`", "extend(ExistingComponent)", "ExistingComponent.extend()", "css.extend(ExistingComponent)"], correctIndex: 0 },

  // ========== REACT - ROUTER ==========
  { category: "React", topic: "Router", question: "Which library is most commonly used for routing in React?", options: ["React Router", "React Navigation only", "Next.js only", "Vue Router"], correctIndex: 0 },
  { category: "React", topic: "Router", question: "What does the `<Route>` component define?", options: ["A CSS route", "A mapping between a URL path and a component to render", "An API endpoint", "A database query"], correctIndex: 1 },
  { category: "React", topic: "Router", question: "What is the purpose of `<Link>` in React Router?", options: ["To make an HTTP request", "To navigate between routes without full page reload", "To style components", "To fetch data"], correctIndex: 1 },
  { category: "React", topic: "Router", question: "Which hook lets you read dynamic segments from the current URL, like an `:id`?", options: ["useLocation", "useParams", "useNavigate", "useSearchParams"], correctIndex: 1 },
  { category: "React", topic: "Router", question: "Which hook lets you programmatically navigate to another route?", options: ["useNavigate", "useParams", "useEffect", "useOutlet"], correctIndex: 0 },

  // ========== REACT - HOOKS ==========
  { category: "React", topic: "Hooks", question: "What is the purpose of the `useState` hook?", options: ["To fetch data", "To add state to functional components", "To create routes", "To style components"], correctIndex: 1 },
  { category: "React", topic: "Hooks", question: "When does `useEffect` run by default?", options: ["Only on unmount", "After every render (including mount)", "Before the component is created", "Only when props change"], correctIndex: 1 },
  { category: "React", topic: "Hooks", question: "What is a rule of Hooks?", options: ["Only call Hooks at the top level of React functions", "Call Hooks inside loops freely", "Call Hooks only in class components", "Hooks must be async"], correctIndex: 0 },
  { category: "React", topic: "Hooks", question: "Which hook memoizes an expensive computed value between renders?", options: ["useCallback", "useMemo", "useRef", "useReducer"], correctIndex: 1 },
  { category: "React", topic: "Hooks", question: "Which hook gives you a mutable value that persists across renders without causing a re-render when changed?", options: ["useState", "useMemo", "useRef", "useEffect"], correctIndex: 2 },

  // ========== REACT - OUTLET ==========
  { category: "React", topic: "Outlet", question: "What is the `<Outlet>` component used for in React Router?", options: ["To display nested route content inside a parent layout", "To create a form input", "To style a div", "To fetch data"], correctIndex: 0 },
  { category: "React", topic: "Outlet", question: "Where do you typically place `<Outlet />`?", options: ["In a leaf route only", "In a parent/layout route that has child routes", "In index.html", "Inside useEffect"], correctIndex: 1 },
  { category: "React", topic: "Outlet", question: "What happens if a parent route has no `<Outlet>` but has child routes?", options: ["Child routes still render normally", "Child routes will not be rendered in that layout", "An error is always thrown", "It falls back to index.html"], correctIndex: 1 },
  { category: "React", topic: "Outlet", question: "Can a route render `<Outlet>` more than once within different layouts of a nested route tree?", options: ["No, only once per app", "Yes, each layout route can render its own <Outlet>", "Only in React Router v5", "Only with lazy loading"], correctIndex: 1 },
];
