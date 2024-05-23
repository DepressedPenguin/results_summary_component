<h2>Main Component</h2>

<p>The <code>Main</code> component serves as the primary container for displaying the result in your application. It imports and renders the <code>Result</code> component within a styled card layout.</p>

<h2>Result Component</h2>

<p>The <code>Result</code> component presents the user's test result in a visually appealing manner. It includes various sections such as the overall score, summary of individual scores in different categories (Reaction, Memory, Verbal, Visual), and a button for continuing further actions.</p>

<h3>File Structure</h3>

<ul>
  <li><strong>main.module.scss:</strong> This file contains the styles for the <code>Main</code> component.</li>
  <li><strong>result.module.scss:</strong> This file contains the styles for the <code>Result</code> component.</li>
</ul>

<h3>Dependencies</h3>

<ul>
  <li>React: The library used for building user interfaces.</li>
  <li>SCSS: The CSS preprocessor used for styling components.</li>
</ul>

<h3>Usage</h3>

<p>To use these components in your project:</p>
<ol>
  <li>Import the <code>Main</code> component where you want to display the result.</li>
  <li>Ensure that the SCSS files are properly imported or linked in your project.</li>
</ol>

<h3>Additional Notes</h3>

<ul>
  <li>The components are designed to be responsive, adapting to different screen sizes using media queries.</li>
  <li>Custom icons are utilized to visually represent different categories of the result.</li>
  <li>Styling is organized using SCSS modules for better maintainability and readability.</li>
</ul>
