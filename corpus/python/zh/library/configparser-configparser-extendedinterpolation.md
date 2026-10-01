---
id: "python-zh-function-configparser-extendedinterpolation"
language: "python"
lang: "zh"
category: "function"
name: "ExtendedInterpolation"
signature: "ExtendedInterpolation()"
directive: "class"
module: "configparser"
source_url: "https://docs.python.org/zh-cn/3/library/configparser.html#configparser.ExtendedInterpolation"
license: "PSF"
updated: "2026-10-01"
---

# ExtendedInterpolation

An alternative handler for interpolation which implements a more advanced
syntax, used for instance in `zc.buildout`.  Extended interpolation is
using `${section:option}` to denote a value from a foreign section.
Interpolation can span multiple levels.  For convenience, if the
`section:` part is omitted, interpolation defaults to the current section
(and possibly the default values from the special section).

For example, the configuration specified above with basic interpolation,
would look like this with extended interpolation:

```ini

[Paths]
home_dir: /Users
my_dir: ${home_dir}/lumberjack
my_pictures: ${my_dir}/Pictures

[Escape]
# use a $$ to escape the $ sign ($ is the only character that needs to be escaped):
cost: $$80
```

来自其他小节的值也可以被获取:

```ini

[Common]
home_dir: /Users
library_dir: /Library
system_dir: /System
macports_dir: /opt/local

[Frameworks]
Python: 3.2
path: ${Common:system_dir}/Library/Frameworks/

[Arthur]
nickname: Two Sheds
last_name: Jackson
my_dir: ${Common:home_dir}/twosheds
my_pictures: ${my_dir}/Pictures
python_dir: ${Frameworks:path}/Python/Versions/${Frameworks:Python}
```
