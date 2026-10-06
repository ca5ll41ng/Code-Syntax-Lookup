---
id: "js-en-function-node-debugger"
language: "js"
lang: "en"
category: "function"
name: "node:debugger"
title: "Debugger"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/debugger.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Debugger

<h1>Debugger</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>Node.js includes a command-line debugging utility. The Node.js debugger client
is not a full-featured debugger, but simple stepping and inspection are
possible.</p>
<p>The debugger supports two modes of operation: <a href="#interactive-mode">interactive mode</a> and <a href="#probe-mode">non-interactive probe mode</a>.</p>
<h2>Interactive mode</h2>
<pre><code class="language-console">$ node inspect [--port=&lt;port&gt;] [&lt;node-option&gt; ...] [&lt;script&gt; [&lt;script-args&gt;] | &lt;host&gt;:&lt;port&gt; | -p &lt;pid&gt;]
</code></pre>
<p>To use it, start Node.js with the <code>inspect</code> argument followed by the path to the
script to debug.</p>
<pre><code class="language-console">$ node inspect myscript.js
&lt; Debugger listening on ws://127.0.0.1:9229/621111f9-ffcb-4e82-b718-48a145fa5db8
&lt; For help, see: https://nodejs.org/learn/getting-started/debugging
&lt;
connecting to 127.0.0.1:9229 ... ok
&lt; Debugger attached.
&lt;
 ok
Break on start in myscript.js:2
  1 // myscript.js
&gt; 2 global.x = 5;
  3 setTimeout(() =&gt; {
  4   debugger;
debug&gt;
</code></pre>
<p>The debugger automatically breaks on the first executable line. To instead
run until the first breakpoint (specified by a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger"><code>debugger</code></a> statement), set
the <code>NODE_INSPECT_RESUME_ON_START</code> environment variable to <code>1</code>.</p>
<pre><code class="language-console">$ cat myscript.js
// myscript.js
global.x = 5;
setTimeout(() =&gt; {
  debugger;
  console.log('world');
}, 1000);
console.log('hello');
$ NODE_INSPECT_RESUME_ON_START=1 node inspect myscript.js
&lt; Debugger listening on ws://127.0.0.1:9229/f1ed133e-7876-495b-83ae-c32c6fc319c2
&lt; For help, see: https://nodejs.org/learn/getting-started/debugging
&lt;
connecting to 127.0.0.1:9229 ... ok
&lt; Debugger attached.
&lt;
&lt; hello
&lt;
break in myscript.js:4
  2 global.x = 5;
  3 setTimeout(() =&gt; {
&gt; 4   debugger;
  5   console.log('world');
  6 }, 1000);
debug&gt; next
break in myscript.js:5
  3 setTimeout(() =&gt; {
  4   debugger;
&gt; 5   console.log('world');
  6 }, 1000);
  7 console.log('hello');
debug&gt; repl
Press Ctrl+C to leave debug repl
&gt; x
5
&gt; 2 + 2
4
debug&gt; next
&lt; world
&lt;
break in myscript.js:6
  4   debugger;
  5   console.log('world');
&gt; 6 }, 1000);
  7 console.log('hello');
  8
debug&gt; .exit
$
</code></pre>
<p>The <code>repl</code> command allows code to be evaluated remotely. The <code>next</code> command
steps to the next line. Type <code>help</code> to see what other commands are available.</p>
<p>Pressing <code>enter</code> without typing a command will repeat the previous debugger
command.</p>
<h3>Watchers</h3>
<p>It is possible to watch expression and variable values while debugging. On
every breakpoint, each expression from the watchers list will be evaluated
in the current context and displayed immediately before the breakpoint's
source code listing.</p>
<p>To begin watching an expression, type <code>watch('my_expression')</code>. The command
<code>watchers</code> will print the active watchers. To remove a watcher, type
<code>unwatch('my_expression')</code>.</p>
<h2>Command reference</h2>
<h3>Stepping</h3>
<ul>
<li><code>cont</code>, <code>c</code>: Continue execution</li>
<li><code>next</code>, <code>n</code>: Step next</li>
<li><code>step</code>, <code>s</code>: Step in</li>
<li><code>out</code>, <code>o</code>: Step out</li>
<li><code>pause</code>: Pause running code (like pause button in Developer Tools)</li>
</ul>
<h4>Breakpoints</h4>
<ul>
<li><code>setBreakpoint()</code>, <code>sb()</code>: Set breakpoint on current line</li>
<li><code>setBreakpoint(line)</code>, <code>sb(line)</code>: Set breakpoint on specific line</li>
<li><code>setBreakpoint('fn()')</code>, <code>sb(...)</code>: Set breakpoint on a first statement in
function's body</li>
<li><code>setBreakpoint('script.js', 1)</code>, <code>sb(...)</code>: Set breakpoint on first line of
<code>script.js</code></li>
<li><code>setBreakpoint('script.js', 1, 'num &lt; 4')</code>, <code>sb(...)</code>: Set conditional
breakpoint on first line of <code>script.js</code> that only breaks when <code>num &lt; 4</code>
evaluates to <code>true</code></li>
<li><code>clearBreakpoint('script.js', 1)</code>, <code>cb(...)</code>: Clear breakpoint in <code>script.js</code>
on line 1</li>
</ul>
<p>It is also possible to set a breakpoint in a file (module) that
is not loaded yet:</p>
<pre><code class="language-console">$ node inspect main.js
&lt; Debugger listening on ws://127.0.0.1:9229/48a5b28a-550c-471b-b5e1-d13dd7165df9
&lt; For help, see: https://nodejs.org/learn/getting-started/debugging
&lt;
connecting to 127.0.0.1:9229 ... ok
&lt; Debugger attached.
&lt;
Break on start in main.js:1
&gt; 1 const mod = require('./mod.js');
  2 mod.hello();
  3 mod.hello();
debug&gt; setBreakpoint('mod.js', 22)
Warning: script 'mod.js' was not loaded yet.
debug&gt; c
break in mod.js:22
 20 // USE OR OTHER DEALINGS IN THE SOFTWARE.
 21
&gt;22 exports.hello = function() {
 23   return 'hello from module';
 24 };
debug&gt;
</code></pre>
<p>It is also possible to set a conditional breakpoint that only breaks when a
given expression evaluates to <code>true</code>:</p>
<pre><code class="language-console">$ node inspect main.js
&lt; Debugger listening on ws://127.0.0.1:9229/ce24daa8-3816-44d4-b8ab-8273c8a66d35
&lt; For help, see: https://nodejs.org/learn/getting-started/debugging
&lt;
connecting to 127.0.0.1:9229 ... ok
&lt; Debugger attached.
Break on start in main.js:7
  5 }
  6
&gt; 7 addOne(10);
  8 addOne(-1);
  9
debug&gt; setBreakpoint('main.js', 4, 'num &lt; 0')
  1 'use strict';
  2
  3 function addOne(num) {
&gt; 4   return num + 1;
  5 }
  6
  7 addOne(10);
  8 addOne(-1);
  9
debug&gt; cont
break in main.js:4
  2
  3 function addOne(num) {
&gt; 4   return num + 1;
  5 }
  6
debug&gt; exec('num')
-1
debug&gt;
</code></pre>
<h4>Information</h4>
<ul>
<li><code>backtrace</code>, <code>bt</code>: Print backtrace of current execution frame</li>
<li><code>list(5)</code>: List scripts source code with 5 line context (5 lines before and
after)</li>
<li><code>watch(expr)</code>: Add expression to watch list</li>
<li><code>unwatch(expr)</code>: Remove expression from watch list</li>
<li><code>unwatch(index)</code>: Remove expression at specific index from watch list</li>
<li><code>watchers</code>: List all watchers and their values (automatically listed on each
breakpoint)</li>
<li><code>repl</code>: Open debugger's repl for evaluation in debugging script's context</li>
<li><code>exec expr</code>, <code>p expr</code>: Execute an expression in debugging script's context and
print its value</li>
<li><code>profile</code>: Start CPU profiling session</li>
<li><code>profileEnd</code>: Stop current CPU profiling session</li>
<li><code>profiles</code>: List all completed CPU profiling sessions</li>
<li><code>profiles[n].save(filepath = 'node.cpuprofile')</code>: Save CPU profiling session
to disk as JSON</li>
<li><code>takeHeapSnapshot(filepath = 'node.heapsnapshot')</code>: Take a heap snapshot
and save to disk as JSON</li>
</ul>
<h4>Execution control</h4>
<ul>
<li><code>run</code>: Run script (automatically runs on debugger's start)</li>
<li><code>restart</code>: Restart script</li>
<li><code>kill</code>: Kill script</li>
</ul>
<h4>Various</h4>
<ul>
<li><code>scripts</code>: List all loaded scripts</li>
<li><code>version</code>: Display V8's version</li>
</ul>
<h2>Probe mode</h2>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p><code>node inspect</code> supports a non-interactive probe mode for inspecting runtime values
in an application via the flag <code>--probe</code>.</p>
<p>Currently, probe mode only supports launching a new process from the entry point
script specified on the command line.</p>
<p>The probe mode sets one or more source breakpoints, evaluates specified
expressions whenever the execution reaches a breakpoint, and prints one
final report of all the evaluated expressions when the session ends
(either on normal completion, error, or timeout). This allows developers to perform
printf-style debugging without having to modify the application code and
clean up afterwards. It also supports structured JSON output for tool use.</p>
<pre><code class="language-console">$ node inspect --probe &lt;file&gt;:&lt;line&gt;[:&lt;col&gt;] --expr &lt;expr&gt; [--cond &lt;expr&gt;] [--max-hit &lt;n&gt;]
              [--probe &lt;file&gt;:&lt;line&gt;[:&lt;col&gt;] --expr &lt;expr&gt; [--cond &lt;expr&gt;] [--max-hit &lt;n&gt;] ...]
              [--json] [--preview] [--timeout=&lt;ms&gt;] [--port=&lt;port&gt;]
              [--] [&lt;node-option&gt; ...] &lt;script&gt; [&lt;script-args&gt; ...]
</code></pre>
<ul>
<li><code>--probe &lt;file&gt;:&lt;line&gt;[:&lt;col&gt;]</code>: Source location of the probe. When execution
reaches the location, the provided expressions are evaluated and printed in
the output. <code>&lt;file&gt;</code> matches the URL suffix of the script to probe.
<code>&lt;line&gt;</code> and <code>&lt;col&gt;</code> numbers are 1-based. When <code>&lt;col&gt;</code> is omitted, the probe
binds to the first executable column on the line.</li>
<li><code>--expr &lt;expr&gt;</code>: JavaScript expression to evaluate whenever execution reaches
the location specified by the preceding <code>--probe</code>.
Must immediately follow the <code>--probe</code> it belongs to.</li>
<li><code>--cond &lt;expr&gt;</code>: An optional condition for the probe location. The probe only
records a hit when <code>&lt;expr&gt;</code> is truthy at the location. A condition that throws
is treated as false.</li>
<li><code>--max-hit &lt;n&gt;</code>: An optional per-probe limit on the number of times the probe
can be hit. When not specified, there's no hit limit. When any probe reaches
its hit limit, the probing process will detach and report the results. The process
being probed will continue to run. If any other probe is never reached by the time
the session ends, it will be reported as a missed probe.</li>
<li><code>--timeout=&lt;ms&gt;</code>: A global wall-clock deadline for the entire probe session.
The default is <code>30000</code>. This can be used to probe a long-running application
that can be terminated externally.</li>
<li><code>--json</code>: If used, prints a structured JSON report instead of the default text report.</li>
<li><code>--preview</code>: If used, non-primitive values will include CDP property previews for
object-like JSON probe values.</li>
<li><code>--port=&lt;port&gt;</code>: Selects the local inspector port where the probing session
will listen. Defaults to <code>0</code>, which requests a random port.</li>
<li><code>--</code> is optional unless the child needs its own Node.js flags.</li>
</ul>
<p>Additional rules about the composition of the options:</p>
<ul>
<li><code>--probe &lt;file&gt;:&lt;line&gt;[:&lt;col&gt;]</code> and <code>--expr &lt;expr&gt;</code> are strict pairs. Each
<code>--probe</code> must be followed immediately by exactly one <code>--expr</code>.</li>
<li><code>--cond &lt;expr&gt;</code> and <code>--max-hit &lt;n&gt;</code> are optional modifiers written <em>after</em> the
<code>--probe</code>/<code>--expr</code> pair they apply to, each at most once per pair. They may not
appear before the first <code>--probe</code> or between a <code>--probe</code> and its matching
<code>--expr</code>.</li>
<li><code>--max-hit</code> scopes to the <code>--probe</code>/<code>--expr</code> pair it follows, so pairs
sharing a location may set different limits. <code>--cond</code> scopes to the whole
location, probes sharing a location must share one condition (or none).</li>
<li><code>--timeout</code>, <code>--json</code>, <code>--preview</code>, and <code>--port</code> are global probe options
for the whole probe session. They may appear before or between probe pairs,
but not between a <code>--probe</code> and its matching <code>--expr</code>.</li>
<li>If additional Node.js execution arguments need to be passed to the child
script, <code>--</code> must be used to separate the probe options from the Node.js
options for the child script.</li>
</ul>
<p>Example:</p>
<pre><code class="language-console">$ node inspect --probe app.js:10 --expr &quot;user&quot;
               --probe src/utils.js:5:15 --expr &quot;config.options&quot;
               --json --preview -- --no-warnings app.js --arg-for-app=foo
</code></pre>
<h3>Probe output format</h3>
<p>When the probe session ends, the probing process prints a final report of all the probe hits and results.</p>
<p>Consider this script:</p>
<pre><code class="language-js">// cli.js
let maxRSS = 0;
for (let i = 0; i &lt; 2; i++) {
  const { rss } = process.memoryUsage();
  maxRSS = Math.max(maxRSS, rss);
}
</code></pre>
<p>Without <code>--json</code>, by default the output is printed in a human-readable text format:</p>
<pre><code class="language-console">$ node inspect --probe cli.js:5 --expr 'rss' cli.js
Hit 1 at file:///path/to/cli.js:5:3
  rss = 54935552
Hit 2 at file:///path/to/cli.js:5:3
  rss = 55083008
Completed
</code></pre>
<p>The original <code>&lt;file&gt;:&lt;line&gt;[:&lt;col&gt;]</code> passed to <code>--probe</code> may be resolved to a different
location to ensure it's pausable, or it can match multiple loaded scripts, so the actual
evaluation location helps disambiguate the results.</p>
<p>Primitive results are printed directly, while objects and arrays use Chrome
DevTools Protocol preview data when available. Other non-primitive values
fall back to the Chrome DevTools Protocol <code>description</code> string.
Expression failures are recorded as <code>[error] ...</code> lines and do not fail
the overall session. If richer text formatting is needed, wrap the expression
in <code>JSON.stringify(...)</code> or <code>util.inspect(...)</code>.</p>
<p>When <code>--json</code> is used, the output shape looks like this:</p>
<pre><code class="language-console">$ node inspect --json --probe cli.js:5 --expr 'rss' cli.js
{&quot;v&quot;:2,&quot;probes&quot;:[{&quot;expr&quot;:&quot;rss&quot;,&quot;target&quot;:{&quot;suffix&quot;:&quot;cli.js&quot;,&quot;line&quot;:5}}],&quot;results&quot;:[{&quot;probe&quot;:0,&quot;event&quot;:&quot;hit&quot;,&quot;hit&quot;:1,&quot;location&quot;:{&quot;url&quot;:&quot;file:///path/to/cli.js&quot;,&quot;line&quot;:5,&quot;column&quot;:3},&quot;result&quot;:{&quot;type&quot;:&quot;number&quot;,&quot;value&quot;:55443456,&quot;description&quot;:&quot;55443456&quot;}},{&quot;probe&quot;:0,&quot;event&quot;:&quot;hit&quot;,&quot;hit&quot;:2,&quot;location&quot;:{&quot;url&quot;:&quot;file:///path/to/cli.js&quot;,&quot;line&quot;:5,&quot;column&quot;:3},&quot;result&quot;:{&quot;type&quot;:&quot;number&quot;,&quot;value&quot;:55574528,&quot;description&quot;:&quot;55574528&quot;}},{&quot;event&quot;:&quot;completed&quot;}]}
</code></pre>
<pre><code class="language-json">{
  &quot;v&quot;: 2, // Probe JSON schema version.
  &quot;probes&quot;: [
    {
      &quot;expr&quot;: &quot;rss&quot;, // The expression paired with --probe.
      &quot;target&quot;: {
        // The user's probe specification. `suffix` is the raw &lt;file&gt; passed
        // to --probe and is matched as a path-separator-anchored suffix
        // against every loaded script's URL. `column` is present only if the
        // user supplied `:col`. The actual evaluation location may differ
        // from the target and will be reported in each hit's `location` field.
        &quot;suffix&quot;: &quot;cli.js&quot;,
        &quot;line&quot;: 5
      }
      // `condition` is present only when the probe was given a --cond expression.
      // `maxHit` is present only when the probe was given a --max-hit limit.
    }
  ],
  &quot;results&quot;: [
    {
      &quot;probe&quot;: 0, // Index into probes[].
      &quot;event&quot;: &quot;hit&quot;, // Hit events are recorded in observation order.
      &quot;hit&quot;: 1, // 1-based hit count for this probe.
      &quot;location&quot;: {
        // The actual location where the execution is paused to evaluate
        // the expression of the probe. This may differ from the probe's
        // target due to pausability adjustments or multiple matches.
        &quot;url&quot;: &quot;file:///path/to/cli.js&quot;,
        &quot;line&quot;: 5,
        &quot;column&quot;: 3
      },
      &quot;result&quot;: {
        &quot;type&quot;: &quot;number&quot;,
        &quot;value&quot;: 55443456,
        &quot;description&quot;: &quot;55443456&quot;
      }
      // If the probe expression throws, fails, or never completes, the entry
      // carries an `error` field instead of `result` with the shape
      // `{ message: string, details?: object }`. The `message` and `details`
      // content is informational only and may change between releases.
    },
    {
      &quot;probe&quot;: 0,
      &quot;event&quot;: &quot;hit&quot;,
      &quot;hit&quot;: 2,
      &quot;location&quot;: { &quot;url&quot;: &quot;file:///path/to/cli.js&quot;, &quot;line&quot;: 5, &quot;column&quot;: 3 },
      &quot;result&quot;: {
        &quot;type&quot;: &quot;number&quot;,
        &quot;value&quot;: 55574528,
        &quot;description&quot;: &quot;55574528&quot;
      }
    },
    {
      &quot;event&quot;: &quot;completed&quot;
      // The final entry is always a terminal event, for example:
      // 1. { &quot;event&quot;: &quot;completed&quot; }
      // 2. { &quot;event&quot;: &quot;miss&quot;, &quot;pending&quot;: [0, 1] }
      // 3. {
      //      &quot;event&quot;: &quot;timeout&quot;,
      //      &quot;pending&quot;: [0],
      //      &quot;error&quot;: {
      //       &quot;code&quot;: &quot;probe_timeout&quot;,
      //       &quot;message&quot;: &quot;Timed out after 30000ms waiting for probes: app.js:10&quot;
      //      }
      //    }
      // 4. {
      //      &quot;event&quot;: &quot;error&quot;,
      //      &quot;pending&quot;: [0],
      //      &quot;error&quot;: {
      //       &quot;code&quot;: &quot;probe_target_exit&quot;,
      //       &quot;exitCode&quot;: 1,
      //       &quot;stderr&quot;: &quot;Error: boom&quot;,
      //       &quot;message&quot;: &quot;Target exited with code 1 before probes: app.js:10&quot;
      //      }
      //    }
      // 5. {
      //      &quot;event&quot;: &quot;error&quot;,
      //      &quot;pending&quot;: [1],
      //      &quot;error&quot;: {
      //       &quot;code&quot;: &quot;probe_failure&quot;,
      //       &quot;probe&quot;: 0,
      //       &quot;stderr&quot;: &quot;...&quot;,
      //       &quot;message&quot;: &quot;Target process exited during probe evaluation before probes: app.js:12. If the failure repeats, review the probe expression.&quot;,
      //       &quot;details&quot;: { &quot;lastCdpMethod&quot;: &quot;Debugger.evaluateOnCallFrame&quot; }
      //      }
      //    }
    }
  ]
}
</code></pre>
<h3>Output and exit codes</h3>
<p>Probe mode only prints the final probe report to stdout, and otherwise silences
stdout/stderr from the child process. When the probing session ends,
the probing process typically exits with code <code>0</code> and prints a final report to
stdout. If the child process exits with a non-zero code before the probe
session ends, or the probe session cannot complete for another reason, the
final report records a terminal <code>error</code> event.</p>
<p>When <code>error.code</code> is <code>'probe_failure'</code> or <code>'probe_timeout'</code>, the probing process
exits with a non-zero code, indicating recorded hits may be incomplete.
In this case, <code>error.message</code> will contain recovery hints, and <code>error.probe</code>,
when present, is an index into the report's <code>probes</code> array that identifies
the possible culprit probe on a best-effort basis to help guide debugging.</p>
<p>Invalid arguments and fatal launch or connect failures may cause the
probing process to exit with a non-zero code and print an error message
to stderr without a final probe report.</p>
<h3>Probing multiple expressions at the same execution point</h3>
<p>When multiple <code>--probe</code>/<code>--expr</code> pairs share the same <code>--probe</code>, the
expressions will be evaluated on the same pause in the order they appear
on the command line.</p>
<p>For each location, there can only be at most one <code>--cond</code> (or none).
Multiple <code>--probe</code>/<code>--expr</code> pairs with conflicting conditions
at the same location will be rejected at launch time.</p>
<pre><code class="language-js">// app.js
const x = { x: 42 };       // line 2
const y = { y: 35 };       // line 3
const z = { ...x, ...y };  // line 4
</code></pre>
<pre><code class="language-console">$ node inspect --probe app.js:4 --expr 'x' --probe app.js:4 --expr 'y' -- app.js
</code></pre>
<p>Prints</p>
<pre><code class="language-text">Hit 1 at file:///path/to/app.js:4:1
  x = {x: 42}
Hit 1 at file:///path/to/app.js:4:1
  y = {y: 35}
Completed
</code></pre>
<pre><code class="language-console">$ node inspect --probe app.js:4 --expr 'x' --probe app.js:4 --expr 'y' --json --preview -- app.js
</code></pre>
<p>Prints</p>
<pre><code class="language-json">{&quot;v&quot;:2,&quot;probes&quot;:[{&quot;expr&quot;:&quot;x&quot;,&quot;target&quot;:{&quot;suffix&quot;:&quot;app.js&quot;,&quot;line&quot;:4}},{&quot;expr&quot;:&quot;y&quot;,&quot;target&quot;:{&quot;suffix&quot;:&quot;app.js&quot;,&quot;line&quot;:4}}],&quot;results&quot;:[{&quot;probe&quot;:0,&quot;event&quot;:&quot;hit&quot;,&quot;hit&quot;:1,&quot;location&quot;:{&quot;url&quot;:&quot;file:///path/to/app.js&quot;,&quot;line&quot;:4,&quot;column&quot;:1},&quot;result&quot;:{&quot;type&quot;:&quot;object&quot;,&quot;description&quot;:&quot;Object&quot;,&quot;preview&quot;:{&quot;type&quot;:&quot;object&quot;,&quot;description&quot;:&quot;Object&quot;,&quot;overflow&quot;:false,&quot;properties&quot;:[{&quot;name&quot;:&quot;x&quot;,&quot;type&quot;:&quot;number&quot;,&quot;value&quot;:&quot;42&quot;}]}}},{&quot;probe&quot;:1,&quot;event&quot;:&quot;hit&quot;,&quot;hit&quot;:1,&quot;location&quot;:{&quot;url&quot;:&quot;file:///path/to/app.js&quot;,&quot;line&quot;:4,&quot;column&quot;:1},&quot;result&quot;:{&quot;type&quot;:&quot;object&quot;,&quot;description&quot;:&quot;Object&quot;,&quot;preview&quot;:{&quot;type&quot;:&quot;object&quot;,&quot;description&quot;:&quot;Object&quot;,&quot;overflow&quot;:false,&quot;properties&quot;:[{&quot;name&quot;:&quot;y&quot;,&quot;type&quot;:&quot;number&quot;,&quot;value&quot;:&quot;35&quot;}]}}},{&quot;event&quot;:&quot;completed&quot;}]}
</code></pre>
<h3>Selecting the probe location</h3>
<p>The expressions are evaluated in the lexical scope of the probe location when
execution reaches it. Avoid probing a variable declared by <code>let</code> or <code>const</code> at its
declaration site, as this leads to a <code>ReferenceError</code> caused by
accessing the variable in its temporal dead zone (TDZ).</p>
<pre><code class="language-js">// app.js
const x = 42;        // line 2
console.log(x);      // line 3
</code></pre>
<pre><code class="language-console">$ node inspect --probe app.js:1 --expr 'x' app.js
Hit 1 at file:///path/to/app.js:1:1
  [error] x = ReferenceError: Cannot access 'x' from debugger
  ...
Completed
</code></pre>
<p>Instead, probe at a location where the variable is already initialized:</p>
<pre><code class="language-console">$ node inspect --probe app.js:3 --expr 'x' app.js
Hit 1 at file:///path/to/app.js:3:1
  x = 42
Completed
</code></pre>
<p>The <code>&lt;file&gt;</code> argument is matched as a path suffix of every loaded
script URL, anchored on a path separator. Passing only a basename
matches every loaded script with that basename, similar to how native
debuggers typically match breakpoints, while passing a partial path
narrows the match. Given:</p>
<pre><code class="language-text">project/
  - src/utils.js
  - lib/utils.js
</code></pre>
<p><code>--probe utils.js:10</code> binds to <em>both</em> files and produces one hit per match.
Each hit carries its own <code>location</code> field identifying where the expression
was actually executed, so consumers can attribute the result to one of the
two files accurately. To disambiguate at bind time, specify a fuller path
that only matches the intended file:</p>
<pre><code class="language-console">$ node inspect --probe src/utils.js:10 --expr 'x' main.js   # matches only src/utils.js
</code></pre>
<h3>Probe examples</h3>
<h4>Probing a variable conditionally</h4>
<pre><code class="language-js">// app.js
let total = 0;
for (let i = 0; i &lt; 10; i++) {
  total += i;  // line 4
}
</code></pre>
<pre><code class="language-console">$ out/Release/node inspect --probe app.js:4 --expr 'total' \
                           --cond 'i % 3 === 0' app.js
</code></pre>
<pre><code class="language-text">Hit 1 at file:///path/to/app.js:3:3
  total = 0
Hit 2 at file:///path/to/app.js:3:3
  total = 3
Hit 3 at file:///path/to/app.js:3:3
  total = 15
Hit 4 at file:///path/to/app.js:3:3
  total = 36
Completed
</code></pre>
<h2>Advanced usage</h2>
<h3>V8 inspector integration for Node.js</h3>
<p>V8 Inspector integration allows attaching Chrome DevTools to Node.js
instances for debugging and profiling. It uses the
<a href="https://chromedevtools.github.io/devtools-protocol/">Chrome DevTools Protocol</a>.</p>
<p>V8 Inspector can be enabled by passing the <code>--inspect</code> flag when starting a
Node.js application. It is also possible to supply a custom port with that flag,
e.g. <code>--inspect=9222</code> will accept DevTools connections on port 9222.</p>
<p>Using the <code>--inspect</code> flag will execute the code immediately before debugger is connected.
This means that the code will start running before you can start debugging, which might
not be ideal if you want to debug from the very beginning.</p>
<p>In such cases, you have two alternatives:</p>
<ol>
<li><code>--inspect-wait</code> flag: This flag will wait for debugger to be attached before executing the code.
This allows you to start debugging right from the beginning of the execution.</li>
<li><code>--inspect-brk</code> flag: Unlike <code>--inspect</code>, this flag will break on the first line of the code
as soon as debugger is attached. This is useful when you want to debug the code step by step
from the very beginning, without any code execution prior to debugging.</li>
</ol>
<p>So, when deciding between <code>--inspect</code>, <code>--inspect-wait</code>, and <code>--inspect-brk</code>, consider whether you want
the code to start executing immediately, wait for debugger to be attached before execution,
or break on the first line for step-by-step debugging.</p>
<pre><code class="language-console">$ node --inspect index.js
Debugger listening on ws://127.0.0.1:9229/dc9010dd-f8b8-4ac5-a510-c1a114ec7d29
For help, see: https://nodejs.org/learn/getting-started/debugging
</code></pre>
<p>(In the example above, the UUID dc9010dd-f8b8-4ac5-a510-c1a114ec7d29
at the end of the URL is generated on the fly, it varies in different
debugging sessions.)</p>
