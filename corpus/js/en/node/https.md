---
id: "js-en-function-node-https"
language: "js"
lang: "en"
category: "function"
name: "node:https"
title: "HTTPS"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/https.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
danger: [{"type":"sink","cwe":["CWE-918"],"note":"请求 URL 含用户输入时为 SSRF sink"}]
---

# HTTPS

<h1>HTTPS</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>HTTPS is the HTTP protocol over TLS/SSL. In Node.js this is implemented as a
separate module.</p>
<h2>Determining if crypto support is unavailable</h2>
<p>It is possible for Node.js to be built without including support for the
<code>node:crypto</code> module. In such cases, attempting to <code>import</code> from <code>https</code> or
calling <code>require('node:https')</code> will result in an error being thrown.</p>
<p>When using CommonJS, the error thrown can be caught using try/catch:</p>
<pre><code class="language-cjs">let https;
try {
  https = require('node:https');
} catch (err) {
  console.error('https support is disabled!');
}
</code></pre>
<p>When using the lexical ESM <code>import</code> keyword, the error can only be
caught if a handler for <code>process.on('uncaughtException')</code> is registered
<em>before</em> any attempt to load the module is made (using, for instance,
a preload module).</p>
<p>When using ESM, if there is a chance that the code may be run on a build
of Node.js where crypto support is not enabled, consider using the
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import"><code>import()</code></a> function instead of the lexical <code>import</code> keyword:</p>
<pre><code class="language-mjs">let https;
try {
  https = await import('node:https');
} catch (err) {
  console.error('https support is disabled!');
}
</code></pre>
<h2>Class: <code>https.Agent</code></h2>
<p>An <a href="#class-httpsagent"><code>Agent</code></a> object for HTTPS similar to <a href="http.md#class-httpagent"><code>http.Agent</code></a>. See
<a href="#httpsrequestoptions-callback"><code>https.request()</code></a> for more information.</p>
<p>Like <code>http.Agent</code>, the <code>createConnection(options[, callback])</code> method can be overridden
to customize how TLS connections are established.</p>
<blockquote>
<p>See <a href="http.md#agentcreateconnectionoptions-callback"><code>agent.createConnection()</code></a> for details on overriding this method,
including asynchronous socket creation with a callback.</p>
</blockquote>
<h3><code>new Agent([options])</code></h3>
<ul>
<li><code>options</code> {Object} Set of configurable options to set on the agent.
Can have the same fields as for <a href="http.md#new-agentoptions"><code>http.Agent(options)</code></a>, and
<ul>
<li>
<p><code>maxCachedSessions</code> {number} maximum number of TLS cached sessions.
Use <code>0</code> to disable TLS session caching. <strong>Default:</strong> <code>100</code>.</p>
</li>
<li>
<p><code>servername</code> {string} the value of
<a href="https://en.wikipedia.org/wiki/Server_Name_Indication">Server Name Indication extension</a> to be sent to the server. Use
empty string <code>''</code> to disable sending the extension.
<strong>Default:</strong> host name of the target server, unless the target server
is specified using an IP address, in which case the default is <code>''</code> (no
extension).</p>
<p>See <a href="tls.md#session-resumption"><code>Session Resumption</code></a> for information about TLS session reuse.</p>
</li>
</ul>
</li>
</ul>
<p>Requests that specify a custom <code>checkServerIdentity</code> option are not eligible
for connection reuse or TLS session reuse by an <code>https.Agent</code>, unless the
<code>checkServerIdentity</code> option was specified when constructing the Agent.</p>
<h4>Event: <code>'keylog'</code></h4>
<ul>
<li><code>line</code> {Buffer} Line of ASCII text, in NSS <code>SSLKEYLOGFILE</code> format.</li>
<li><code>tlsSocket</code> {tls.TLSSocket} The <code>tls.TLSSocket</code> instance on which it was
generated.</li>
</ul>
<p>The <code>keylog</code> event is emitted when key material is generated or received by a
connection managed by this agent (typically before handshake has completed, but
not necessarily). This keying material can be stored for debugging, as it
allows captured TLS traffic to be decrypted. It may be emitted multiple times
for each socket.</p>
<p>A typical use case is to append received lines to a common text file, which is
later used by software (such as Wireshark) to decrypt the traffic:</p>
<pre><code class="language-js">// ...
https.globalAgent.on('keylog', (line, tlsSocket) =&gt; {
  fs.appendFileSync('/tmp/ssl-keys.log', line, { mode: 0o600 });
});
</code></pre>
<h2>Class: <code>https.Server</code></h2>
<ul>
<li>Extends: {tls.Server}</li>
</ul>
<p>See <a href="http.md#class-httpserver"><code>http.Server</code></a> for more information.</p>
<h3><code>server.close([callback])</code></h3>
<ul>
<li><code>callback</code> {Function}</li>
<li>Returns: {https.Server}</li>
</ul>
<p>See <a href="http.md#serverclosecallback"><code>server.close()</code></a> in the <code>node:http</code> module.</p>
<h3><code>server[Symbol.asyncDispose]()</code></h3>
<p>Calls <a href="#serverclosecallback"><code>server.close()</code></a> and returns a promise that
fulfills when the server has closed.</p>
<h3><code>server.closeAllConnections()</code></h3>
<p>See <a href="http.md#servercloseallconnections"><code>server.closeAllConnections()</code></a> in the <code>node:http</code> module.</p>
<h3><code>server.closeIdleConnections()</code></h3>
<p>See <a href="http.md#servercloseidleconnections"><code>server.closeIdleConnections()</code></a> in the <code>node:http</code> module.</p>
<h3><code>server.headersTimeout</code></h3>
<ul>
<li>Type: {number} <strong>Default:</strong> <code>60000</code></li>
</ul>
<p>See <a href="http.md#serverheaderstimeout"><code>server.headersTimeout</code></a> in the <code>node:http</code> module.</p>
<h3><code>server.listen()</code></h3>
<p>Starts the HTTPS server listening for encrypted connections.
This method is identical to <a href="net.md#serverlisten"><code>server.listen()</code></a> from <a href="net.md#class-netserver"><code>net.Server</code></a>.</p>
<h3><code>server.maxHeadersCount</code></h3>
<ul>
<li>Type: {number} <strong>Default:</strong> <code>1000</code></li>
</ul>
<p>See <a href="http.md#servermaxheaderscount"><code>server.maxHeadersCount</code></a> in the <code>node:http</code> module.</p>
<h3><code>server.requestTimeout</code></h3>
<ul>
<li>Type: {number} <strong>Default:</strong> <code>300000</code></li>
</ul>
<p>See <a href="http.md#serverrequesttimeout"><code>server.requestTimeout</code></a> in the <code>node:http</code> module.</p>
<h3><code>server.setTimeout([msecs][, callback])</code></h3>
<ul>
<li><code>msecs</code> {number} <strong>Default:</strong> <code>120000</code> (2 minutes)</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {https.Server}</li>
</ul>
<p>See <a href="http.md#serversettimeoutmsecs-callback"><code>server.setTimeout()</code></a> in the <code>node:http</code> module.</p>
<h3><code>server.timeout</code></h3>
<ul>
<li>Type: {number} <strong>Default:</strong> 0 (no timeout)</li>
</ul>
<p>See <a href="http.md#servertimeout"><code>server.timeout</code></a> in the <code>node:http</code> module.</p>
<h3><code>server.keepAliveTimeout</code></h3>
<ul>
<li>Type: {number} <strong>Default:</strong> <code>5000</code> (5 seconds)</li>
</ul>
<p>See <a href="http.md#serverkeepalivetimeout"><code>server.keepAliveTimeout</code></a> in the <code>node:http</code> module.</p>
<h2><code>https.createServer([options][, requestListener])</code></h2>
<ul>
<li><code>options</code> {Object} Accepts <code>options</code> from <a href="tls.md#tlscreateserveroptions-secureconnectionlistener"><code>tls.createServer()</code></a>,
<a href="tls.md#tlscreatesecurecontextoptions"><code>tls.createSecureContext()</code></a> and <a href="http.md#httpcreateserveroptions-requestlistener"><code>http.createServer()</code></a>.</li>
<li><code>requestListener</code> {Function} A listener to be added to the <code>'request'</code> event.</li>
<li>Returns: {https.Server}</li>
</ul>
<pre><code class="language-mjs">// curl -k https://localhost:8000/
import { createServer } from 'node:https';
import { readFileSync } from 'node:fs';

const options = {
  key: readFileSync('private-key.pem'),
  cert: readFileSync('certificate.pem'),
};

createServer(options, (req, res) =&gt; {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);
</code></pre>
<pre><code class="language-cjs">// curl -k https://localhost:8000/
const https = require('node:https');
const fs = require('node:fs');

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem'),
};

https.createServer(options, (req, res) =&gt; {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);
</code></pre>
<p>Or</p>
<pre><code class="language-mjs">import { createServer } from 'node:https';
import { readFileSync } from 'node:fs';

const options = {
  pfx: readFileSync('test_cert.pfx'),
  passphrase: 'sample',
};

createServer(options, (req, res) =&gt; {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);
</code></pre>
<pre><code class="language-cjs">const https = require('node:https');
const fs = require('node:fs');

const options = {
  pfx: fs.readFileSync('test_cert.pfx'),
  passphrase: 'sample',
};

https.createServer(options, (req, res) =&gt; {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);
</code></pre>
<p>To generate the certificate and key for this example, run:</p>
<pre><code class="language-bash">openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
  -keyout private-key.pem -out certificate.pem
</code></pre>
<p>Then, to generate the <code>pfx</code> certificate for this example, run:</p>
<pre><code class="language-bash">openssl pkcs12 -certpbe AES-256-CBC -export -out test_cert.pfx \
  -inkey private-key.pem -in certificate.pem -passout pass:sample
</code></pre>
<h2><code>https.get(options[, callback])</code></h2>
<h2><code>https.get(url[, options][, callback])</code></h2>
<ul>
<li><code>url</code> {string | URL}</li>
<li><code>options</code> {Object | string | URL} Accepts the same <code>options</code> as
<a href="#httpsrequestoptions-callback"><code>https.request()</code></a>, with the method set to GET by default.</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {http.ClientRequest}</li>
</ul>
<p>Like <a href="http.md#httpgetoptions-callback"><code>http.get()</code></a> but for HTTPS.</p>
<p><code>options</code> can be an object, a string, or a <a href="url.md#the-whatwg-url-api"><code>URL</code></a> object. If <code>options</code> is a
string, it is automatically parsed with <a href="url.md#new-urlinput-base"><code>new URL()</code></a>. If it is a <a href="url.md#the-whatwg-url-api"><code>URL</code></a>
object, it will be automatically converted to an ordinary <code>options</code> object.</p>
<pre><code class="language-mjs">import { get } from 'node:https';
import process from 'node:process';

get('https://encrypted.google.com/', (res) =&gt; {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) =&gt; {
    process.stdout.write(d);
  });

}).on('error', (e) =&gt; {
  console.error(e);
});
</code></pre>
<pre><code class="language-cjs">const https = require('node:https');

https.get('https://encrypted.google.com/', (res) =&gt; {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) =&gt; {
    process.stdout.write(d);
  });

}).on('error', (e) =&gt; {
  console.error(e);
});
</code></pre>
<h2><code>https.globalAgent</code></h2>
<p>Global instance of <a href="#class-httpsagent"><code>https.Agent</code></a> for all HTTPS client requests. Diverges
from a default <a href="#class-httpsagent"><code>https.Agent</code></a> configuration by having <code>keepAlive</code> enabled and
a <code>timeout</code> of 5 seconds.</p>
<h2><code>https.request(options[, callback])</code></h2>
<h2><code>https.request(url[, options][, callback])</code></h2>
<ul>
<li><code>url</code> {string | URL}</li>
<li><code>options</code> {Object | string | URL} Accepts all <code>options</code> from
<a href="http.md#httprequestoptions-callback"><code>http.request()</code></a>, with some differences in default values:
<ul>
<li><code>protocol</code> <strong>Default:</strong> <code>'https:'</code></li>
<li><code>port</code> <strong>Default:</strong> <code>443</code></li>
<li><code>agent</code> <strong>Default:</strong> <code>https.globalAgent</code></li>
</ul>
</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {http.ClientRequest}</li>
</ul>
<p>Makes a request to a secure web server.</p>
<p>The following additional <code>options</code> from <a href="tls.md#tlsconnectoptions-callback"><code>tls.connect()</code></a> are also accepted:
<code>ca</code>, <code>cert</code>, <code>ciphers</code>, <code>clientCertEngine</code> (deprecated), <code>crl</code>, <code>dhparam</code>, <code>ecdhCurve</code>,
<code>honorCipherOrder</code>, <code>key</code>, <code>passphrase</code>, <code>pfx</code>, <code>rejectUnauthorized</code>,
<code>secureOptions</code>, <code>secureProtocol</code>, <code>servername</code>, <code>sessionIdContext</code>,
<code>highWaterMark</code>.</p>
<p><code>options</code> can be an object, a string, or a <a href="url.md#the-whatwg-url-api"><code>URL</code></a> object. If <code>options</code> is a
string, it is automatically parsed with <a href="url.md#new-urlinput-base"><code>new URL()</code></a>. If it is a <a href="url.md#the-whatwg-url-api"><code>URL</code></a>
object, it will be automatically converted to an ordinary <code>options</code> object.</p>
<p><code>https.request()</code> returns an instance of the <a href="http.md#class-httpclientrequest"><code>http.ClientRequest</code></a>
class. The <code>ClientRequest</code> instance is a writable stream. If one needs to
upload a file with a POST request, then write to the <code>ClientRequest</code> object.</p>
<pre><code class="language-mjs">import { request } from 'node:https';
import process from 'node:process';

const options = {
  hostname: 'encrypted.google.com',
  port: 443,
  path: '/',
  method: 'GET',
};

const req = request(options, (res) =&gt; {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) =&gt; {
    process.stdout.write(d);
  });
});

req.on('error', (e) =&gt; {
  console.error(e);
});
req.end();
</code></pre>
<pre><code class="language-cjs">const https = require('node:https');

const options = {
  hostname: 'encrypted.google.com',
  port: 443,
  path: '/',
  method: 'GET',
};

const req = https.request(options, (res) =&gt; {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) =&gt; {
    process.stdout.write(d);
  });
});

req.on('error', (e) =&gt; {
  console.error(e);
});
req.end();
</code></pre>
<p>Example using options from <a href="tls.md#tlsconnectoptions-callback"><code>tls.connect()</code></a>:</p>
<pre><code class="language-js">const options = {
  hostname: 'encrypted.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem'),
};
options.agent = new https.Agent(options);

const req = https.request(options, (res) =&gt; {
  // ...
});
</code></pre>
<p>Alternatively, opt out of connection pooling by not using an <a href="#class-httpsagent"><code>Agent</code></a>.</p>
<pre><code class="language-js">const options = {
  hostname: 'encrypted.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem'),
  agent: false,
};

const req = https.request(options, (res) =&gt; {
  // ...
});
</code></pre>
<p>Example using a <a href="url.md#the-whatwg-url-api"><code>URL</code></a> as <code>options</code>:</p>
<pre><code class="language-js">const options = new URL('https://abc:xyz@example.com');

const req = https.request(options, (res) =&gt; {
  // ...
});
</code></pre>
<p>Example pinning on certificate fingerprint, or the public key (similar to
<code>pin-sha256</code>):</p>
<pre><code class="language-mjs">import { checkServerIdentity } from 'node:tls';
import { Agent, request } from 'node:https';
import { createHash } from 'node:crypto';

function sha256(s) {
  return createHash('sha256').update(s).digest('base64');
}
const options = {
  hostname: 'github.com',
  port: 443,
  path: '/',
  method: 'GET',
  checkServerIdentity: function(host, cert) {
    // Make sure the certificate is issued to the host we are connected to
    const err = checkServerIdentity(host, cert);
    if (err) {
      return err;
    }

    // Pin the public key, similar to HPKP pin-sha256 pinning
    const pubkey256 = 'SIXvRyDmBJSgatgTQRGbInBaAK+hZOQ18UmrSwnDlK8=';
    if (sha256(cert.pubkey) !== pubkey256) {
      const msg = 'Certificate verification error: ' +
        `The public key of '${cert.subject.CN}' ` +
        'does not match our pinned fingerprint';
      return new Error(msg);
    }

    // Pin the exact certificate, rather than the pub key
    const cert256 = 'FD:6E:9B:0E:F3:98:BC:D9:04:C3:B2:EC:16:7A:7B:' +
      '0F:DA:72:01:C9:03:C5:3A:6A:6A:E5:D0:41:43:63:EF:65';
    if (cert.fingerprint256 !== cert256) {
      const msg = 'Certificate verification error: ' +
        `The certificate of '${cert.subject.CN}' ` +
        'does not match our pinned fingerprint';
      return new Error(msg);
    }

    // This loop is informational only.
    // Print the certificate and public key fingerprints of all certs in the
    // chain. Its common to pin the public key of the issuer on the public
    // internet, while pinning the public key of the service in sensitive
    // environments.
    let lastprint256;
    do {
      console.log('Subject Common Name:', cert.subject.CN);
      console.log('  Certificate SHA256 fingerprint:', cert.fingerprint256);

      const hash = createHash('sha256');
      console.log('  Public key ping-sha256:', sha256(cert.pubkey));

      lastprint256 = cert.fingerprint256;
      cert = cert.issuerCertificate;
    } while (cert.fingerprint256 !== lastprint256);

  },
};

options.agent = new Agent(options);
const req = request(options, (res) =&gt; {
  console.log('All OK. Server matched our pinned cert or public key');
  console.log('statusCode:', res.statusCode);

  res.on('data', (d) =&gt; {});
});

req.on('error', (e) =&gt; {
  console.error(e.message);
});
req.end();
</code></pre>
<pre><code class="language-cjs">const tls = require('node:tls');
const https = require('node:https');
const crypto = require('node:crypto');

function sha256(s) {
  return crypto.createHash('sha256').update(s).digest('base64');
}
const options = {
  hostname: 'github.com',
  port: 443,
  path: '/',
  method: 'GET',
  checkServerIdentity: function(host, cert) {
    // Make sure the certificate is issued to the host we are connected to
    const err = tls.checkServerIdentity(host, cert);
    if (err) {
      return err;
    }

    // Pin the public key, similar to HPKP pin-sha256 pinning
    const pubkey256 = 'SIXvRyDmBJSgatgTQRGbInBaAK+hZOQ18UmrSwnDlK8=';
    if (sha256(cert.pubkey) !== pubkey256) {
      const msg = 'Certificate verification error: ' +
        `The public key of '${cert.subject.CN}' ` +
        'does not match our pinned fingerprint';
      return new Error(msg);
    }

    // Pin the exact certificate, rather than the pub key
    const cert256 = 'FD:6E:9B:0E:F3:98:BC:D9:04:C3:B2:EC:16:7A:7B:' +
      '0F:DA:72:01:C9:03:C5:3A:6A:6A:E5:D0:41:43:63:EF:65';
    if (cert.fingerprint256 !== cert256) {
      const msg = 'Certificate verification error: ' +
        `The certificate of '${cert.subject.CN}' ` +
        'does not match our pinned fingerprint';
      return new Error(msg);
    }

    // This loop is informational only.
    // Print the certificate and public key fingerprints of all certs in the
    // chain. Its common to pin the public key of the issuer on the public
    // internet, while pinning the public key of the service in sensitive
    // environments.
    do {
      console.log('Subject Common Name:', cert.subject.CN);
      console.log('  Certificate SHA256 fingerprint:', cert.fingerprint256);

      hash = crypto.createHash('sha256');
      console.log('  Public key ping-sha256:', sha256(cert.pubkey));

      lastprint256 = cert.fingerprint256;
      cert = cert.issuerCertificate;
    } while (cert.fingerprint256 !== lastprint256);

  },
};

options.agent = new https.Agent(options);
const req = https.request(options, (res) =&gt; {
  console.log('All OK. Server matched our pinned cert or public key');
  console.log('statusCode:', res.statusCode);

  res.on('data', (d) =&gt; {});
});

req.on('error', (e) =&gt; {
  console.error(e.message);
});
req.end();
</code></pre>
<p>Outputs for example:</p>
<pre><code class="language-text">Subject Common Name: github.com
  Certificate SHA256 fingerprint: FD:6E:9B:0E:F3:98:BC:D9:04:C3:B2:EC:16:7A:7B:0F:DA:72:01:C9:03:C5:3A:6A:6A:E5:D0:41:43:63:EF:65
  Public key ping-sha256: SIXvRyDmBJSgatgTQRGbInBaAK+hZOQ18UmrSwnDlK8=
Subject Common Name: Sectigo ECC Domain Validation Secure Server CA
  Certificate SHA256 fingerprint: 61:E9:73:75:E9:F6:DA:98:2F:F5:C1:9E:2F:94:E6:6C:4E:35:B6:83:7C:E3:B9:14:D2:24:5C:7F:5F:65:82:5F
  Public key ping-sha256: Eep0p/AsSa9lFUH6KT2UY+9s1Z8v7voAPkQ4fGknZ2g=
Subject Common Name: USERTrust ECC Certification Authority
  Certificate SHA256 fingerprint: A6:CF:64:DB:B4:C8:D5:FD:19:CE:48:89:60:68:DB:03:B5:33:A8:D1:33:6C:62:56:A8:7D:00:CB:B3:DE:F3:EA
  Public key ping-sha256: UJM2FOhG9aTNY0Pg4hgqjNzZ/lQBiMGRxPD5Y2/e0bw=
Subject Common Name: AAA Certificate Services
  Certificate SHA256 fingerprint: D7:A7:A0:FB:5D:7E:27:31:D7:71:E9:48:4E:BC:DE:F7:1D:5F:0C:3E:0A:29:48:78:2B:C8:3E:E0:EA:69:9E:F4
  Public key ping-sha256: vRU+17BDT2iGsXvOi76E7TQMcTLXAqj0+jGPdW7L1vM=
All OK. Server matched our pinned cert or public key
statusCode: 200
</code></pre>
