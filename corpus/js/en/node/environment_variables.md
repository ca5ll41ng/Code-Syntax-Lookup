---
id: "js-en-function-node-environment_variables"
language: "js"
lang: "en"
category: "function"
name: "node:environment_variables"
title: "Environment Variables"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/environment_variables.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Environment Variables

<h1>Environment Variables</h1>
<p>Environment variables are variables associated to the environment the Node.js process runs in.</p>
<h2>CLI Environment Variables</h2>
<p>There is a set of environment variables that can be defined to customize the behavior of Node.js,
for more details refer to the <a href="cli.md#environment-variables_1">CLI Environment Variables documentation</a>.</p>
<h2><code>process.env</code></h2>
<p>The basic API for interacting with environment variables is <code>process.env</code>, it consists of an object
with pre-populated user environment variables that can be modified and expanded.</p>
<p>For more details refer to the <a href="process.md#processenv"><code>process.env</code> documentation</a>.</p>
<h2>DotEnv</h2>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>Set of utilities for dealing with additional environment variables defined in <code>.env</code> files.</p>
<h3>.env files</h3>
<p><code>.env</code> files (also known as dotenv files) are files that define environment variables,
which Node.js applications can then interact with (popularized by the <a href="https://github.com/motdotla/dotenv">dotenv</a> package).</p>
<p>The following is an example of the content of a basic <code>.env</code> file:</p>
<pre><code class="language-text">MY_VAR_A = &quot;my variable A&quot;
MY_VAR_B = &quot;my variable B&quot;
</code></pre>
<p>This type of file is used in various different programming languages and platforms but there
is no formal specification for it, therefore Node.js defines its own specification described below.</p>
<p>A <code>.env</code> file is a file that contains key-value pairs, each pair is represented by a variable name
followed by the equal sign (<code>=</code>) followed by a variable value.</p>
<p>The name of such files is usually <code>.env</code> or it starts with <code>.env</code> (like for example <code>.env.dev</code> where
<code>dev</code> indicates a specific target environment). This is the recommended naming scheme but it is not
mandatory and dotenv files can have any arbitrary file name.</p>
<h4>Variable Names</h4>
<p>A valid variable name must contain only letters (uppercase or lowercase), digits and underscores
(<code>_</code>) and it can't begin with a digit.</p>
<p>More specifically a valid variable name must match the following regular expression:</p>
<pre><code class="language-text">^[a-zA-Z_]+[a-zA-Z0-9_]*$
</code></pre>
<p>The recommended convention is to use capital letters with underscores and digits when necessary,
but any variable name respecting the above definition will work just fine.</p>
<p>For example, the following are some valid variable names: <code>MY_VAR</code>, <code>MY_VAR_1</code>, <code>my_var</code>, <code>my_var_1</code>,
<code>myVar</code>, <code>My_Var123</code>, while these are instead not valid: <code>1_VAR</code>, <code>'my-var'</code>, <code>&quot;my var&quot;</code>, <code>VAR_#1</code>.</p>
<h4>Variable Values</h4>
<p>Variable values are comprised by any arbitrary text, which can optionally be wrapped inside
single (<code>'</code>) or double (<code>&quot;</code>) quotes.</p>
<p>Quoted variables can span across multiple lines, while non quoted ones are restricted to a single line.</p>
<p>Noting that when parsed by Node.js all values are interpreted as text, meaning that any value will
result in a JavaScript string inside Node.js. For example the following values: <code>0</code>, <code>true</code> and
<code>{ &quot;hello&quot;: &quot;world&quot; }</code> will result in the literal strings <code>'0'</code>, <code>'true'</code> and <code>'{ &quot;hello&quot;: &quot;world&quot; }'</code>
instead of the number zero, the boolean <code>true</code> and an object with the <code>hello</code> property respectively.</p>
<p>Examples of valid variables:</p>
<pre><code class="language-text">MY_SIMPLE_VAR = a simple single line variable
MY_EQUALS_VAR = &quot;this variable contains an = sign!&quot;
MY_HASH_VAR = 'this variable contains a # symbol!'
MY_MULTILINE_VAR = '
this is a multiline variable containing
two separate lines\nSorry, I meant three lines'
</code></pre>
<h4>Spacing</h4>
<p>Leading and trailing whitespace characters around variable keys and values are ignored unless they
are enclosed within quotes.</p>
<p>For example:</p>
<pre><code class="language-text">   MY_VAR_A   =    my variable a
    MY_VAR_B   =    '   my variable b   '
</code></pre>
<p>will be treated identically to:</p>
<pre><code class="language-text">MY_VAR_A = my variable a
MY_VAR_B = '   my variable b   '
</code></pre>
<h4>Comments</h4>
<p>Hash-tag (<code>#</code>) characters denote the beginning of a comment, meaning that the rest of the line
will be completely ignored.</p>
<p>Hash-tags found within quotes are however treated as any other standard character.</p>
<p>For example:</p>
<pre><code class="language-text"># This is a comment
MY_VAR = my variable # This is also a comment
MY_VAR_A = &quot;# this is NOT a comment&quot;
</code></pre>
<h4><code>export</code> prefixes</h4>
<p>The <code>export</code> keyword can optionally be added in front of variable declarations, such keyword will be completely ignored
by all processing done on the file.</p>
<p>This is useful so that the file can be sourced, without modifications, in shell terminals.</p>
<p>Example:</p>
<pre><code class="language-text">export MY_VAR = my variable
</code></pre>
<h3>CLI Options</h3>
<p><code>.env</code> files can be used to populate the <code>process.env</code> object via one the following CLI options:</p>
<ul>
<li>
<p><a href="cli.md#--env-filefile"><code>--env-file=file</code></a></p>
</li>
<li>
<p><a href="cli.md#--env-file-if-existsfile"><code>--env-file-if-exists=file</code></a></p>
</li>
</ul>
<h3>Programmatic APIs</h3>
<p>There following two functions allow you to directly interact with <code>.env</code> files:</p>
<ul>
<li>
<p><a href="process.md#processloadenvfilepath"><code>process.loadEnvFile</code></a> loads an <code>.env</code> file and populates <code>process.env</code> with its variables</p>
</li>
<li>
<p><a href="util.md#utilparseenvcontent"><code>util.parseEnv</code></a> parses the raw content of an <code>.env</code> file and returns its value in an object</p>
</li>
</ul>
