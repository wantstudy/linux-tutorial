(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{270:function(v,_,e){"use strict";e.r(_);var t=e(2),o=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"vim-应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vim-应用"}},[v._v("#")]),v._v(" Vim 应用")]),v._v(" "),e("h2",{attrs:{id:"_1-概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[v._v("#")]),v._v(" 1. 概念")]),v._v(" "),e("h3",{attrs:{id:"_1-1-什么是-vim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是-vim"}},[v._v("#")]),v._v(" 1.1. 什么是 vim")]),v._v(" "),e("p",[v._v("Vim 是从 vi 发展出来的一个文本编辑器。代码补完、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。和 Emacs 并列成为类 Unix 系统用户最喜欢的编辑器。")]),v._v(" "),e("h3",{attrs:{id:"_1-2-vim-的模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-vim-的模式"}},[v._v("#")]),v._v(" 1.2. Vim 的模式")]),v._v(" "),e("p",[v._v("基本上 vi/vim 共分为三种模式，分别是"),e("strong",[v._v("命令模式（Command mode）")]),v._v("，"),e("strong",[v._v("插入模式（Insert mode）"),e("strong",[v._v("和")]),v._v("底线命令模式（Last line mode）")]),v._v("。")]),v._v(" "),e("h4",{attrs:{id:"_1-2-1-命令模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-命令模式"}},[v._v("#")]),v._v(" 1.2.1. 命令模式")]),v._v(" "),e("p",[e("strong",[v._v("用户刚刚启动 vi/vim，便进入了命令模式。")])]),v._v(" "),e("p",[v._v("此状态下敲击键盘动作会被 Vim 识别为命令，而非输入字符。")]),v._v(" "),e("h4",{attrs:{id:"_1-2-2-插入模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-插入模式"}},[v._v("#")]),v._v(" 1.2.2. 插入模式")]),v._v(" "),e("p",[e("strong",[v._v("在命令模式下按下 "),e("code",[v._v("i")]),v._v(" 就进入了输入模式。")])]),v._v(" "),e("p",[v._v("在输入模式下，你可以输入文本内容。")]),v._v(" "),e("h4",{attrs:{id:"_1-2-3-底线命令模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-底线命令模式"}},[v._v("#")]),v._v(" 1.2.3. 底线命令模式")]),v._v(" "),e("p",[e("strong",[v._v("在命令模式下按下 "),e("code",[v._v(":")]),v._v("（英文冒号）就进入了底线命令模式。")])]),v._v(" "),e("p",[v._v("底线命令模式可以输入单个或多个字符的命令，可用的命令非常多。")]),v._v(" "),e("h2",{attrs:{id:"_2-vim-渐进学习"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-vim-渐进学习"}},[v._v("#")]),v._v(" 2. Vim 渐进学习")]),v._v(" "),e("h3",{attrs:{id:"_2-1-存活"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-存活"}},[v._v("#")]),v._v(" 2.1. 存活")]),v._v(" "),e("ol",[e("li",[v._v("安装 "),e("a",{attrs:{href:"http://www.vim.org/",target:"_blank",rel:"noopener noreferrer"}},[v._v("vim"),e("OutboundLink")],1)]),v._v(" "),e("li",[v._v("启动 vim")]),v._v(" "),e("li",[v._v("**什么也别干！**请先阅读")])]),v._v(" "),e("p",[v._v("当你安装好一个编辑器后，你一定会想在其中输入点什么东西，然后看看这个编辑器是什么样子。但 vim 不是这样的，请按照下面的命令操作：")]),v._v(" "),e("ul",[e("li",[v._v("启 动 Vim 后，vim 在 "),e("em",[v._v("Normal")]),v._v(" 模式下。")]),v._v(" "),e("li",[v._v("让我们进入 "),e("em",[v._v("Insert")]),v._v(" 模式，请按下键 i 。(注：你会看到 vim 左下角有一个–insert–字样，表示，你可以以插入的方式输入了）")]),v._v(" "),e("li",[v._v("此时，你可以输入文本了，就像你用“记事本”一样。")]),v._v(" "),e("li",[v._v("如果你想返回 "),e("em",[v._v("Normal")]),v._v(" 模式，请按 "),e("code",[v._v("ESC")]),v._v(" 键。")])]),v._v(" "),e("p",[v._v("现在，你知道如何在 "),e("em",[v._v("Insert")]),v._v(" 和 "),e("em",[v._v("Normal")]),v._v(" 模式下切换了。下面是一些命令，可以让你在 "),e("em",[v._v("Normal")]),v._v(" 模式下幸存下来：")]),v._v(" "),e("blockquote",[e("ul",[e("li",[e("code",[v._v("i")]),v._v(" → "),e("em",[v._v("Insert")]),v._v(" 模式，按 "),e("code",[v._v("ESC")]),v._v(" 回到 "),e("em",[v._v("Normal")]),v._v(" 模式.")]),v._v(" "),e("li",[e("code",[v._v("x")]),v._v(" → 删当前光标所在的一个字符。")]),v._v(" "),e("li",[e("code",[v._v(":wq")]),v._v(" → 存盘 + 退出 ("),e("code",[v._v(":w")]),v._v(" 存盘, "),e("code",[v._v(":q")]),v._v(" 退出) （注：:w 后可以跟文件名）")]),v._v(" "),e("li",[e("code",[v._v("dd")]),v._v(" → 删除当前行，并把删除的行存到剪贴板里")]),v._v(" "),e("li",[e("code",[v._v("p")]),v._v(" → 粘贴剪贴板")])]),v._v(" "),e("p",[e("strong",[v._v("推荐")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("hjkl")]),v._v(" (强例推荐使用其移动光标，但不必需) → 你也可以使用光标键 (←↓↑→). 注: "),e("code",[v._v("j")]),v._v(" 就像下箭头。")]),v._v(" "),e("li",[e("code",[v._v(":help <command>")]),v._v(" → 显示相关命令的帮助。你也可以就输入 "),e("code",[v._v(":help")]),v._v(" 而不跟命令。（注：退出帮助需要输入:q）")])])]),v._v(" "),e("p",[v._v("你能在 vim 幸存下来只需要上述的那 5 个命令，你就可以编辑文本了，你一定要把这些命令练成一种下意识的状态。于是你就可以开始进阶到第二级了。")]),v._v(" "),e("p",[v._v("当是，在你进入第二级时，需要再说一下 "),e("em",[v._v("Normal")]),v._v(" 模式。在一般的编辑器下，当你需要 copy 一段文字的时候，你需要使用 "),e("code",[v._v("Ctrl")]),v._v(" 键，比如："),e("code",[v._v("Ctrl-C")]),v._v("。也就是说，"),e("code",[v._v("Ctrl")]),v._v(" 键就好像功能键一样，当你按下了功能键 "),e("code",[v._v("Ctrl")]),v._v(" 后，C 就不在是 C 了，而且就是一个命令或是一个快键键了，"),e("strong",[v._v("在 vim 的 Normal 模式下，所有的键都是功能键")]),v._v("。这个你需要知道。")]),v._v(" "),e("blockquote",[e("p",[e("strong",[v._v("标记")])]),v._v(" "),e("ul",[e("li",[v._v("下面的文字中，如果是 "),e("code",[v._v("Ctrl-λ")]),v._v("我会写成 "),e("code",[v._v("<C-λ>")]),v._v(".")]),v._v(" "),e("li",[v._v("以 "),e("code",[v._v(":")]),v._v(" 开始的命令你需要输入 "),e("code",[v._v("<enter>")]),v._v("回车，例如 — 如果我写成 "),e("code",[v._v(":q")]),v._v(" 也就是说你要输入 "),e("code",[v._v(":q<enter>")]),v._v(".")])])]),v._v(" "),e("h3",{attrs:{id:"_2-2-感觉良好"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-感觉良好"}},[v._v("#")]),v._v(" 2.2. 感觉良好")]),v._v(" "),e("p",[v._v("上面的那些命令只能让你存活下来，现在是时候学习一些更多的命令了，下面是我的建议：（注：所有的命令都需要在 Normal 模式下使用，如果你不知道现在在什么样的模式，你就狂按几次 ESC 键）")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("各种插入模式")]),v._v(" "),e("blockquote",[e("ul",[e("li",[e("code",[v._v("a")]),v._v(" → 在光标后插入")]),v._v(" "),e("li",[e("code",[v._v("o")]),v._v(" → 在当前行后插入一个新行")]),v._v(" "),e("li",[e("code",[v._v("O")]),v._v(" → 在当前行前插入一个新行")]),v._v(" "),e("li",[e("code",[v._v("cw")]),v._v(" → 替换从光标所在位置后到一个单词结尾的字符")])])])]),v._v(" "),e("li",[e("p",[v._v("简单的移动光标")]),v._v(" "),e("blockquote",[e("ul",[e("li",[e("code",[v._v("0")]),v._v(" → 数字零，到行头")]),v._v(" "),e("li",[e("code",[v._v("^")]),v._v(" → 到本行第一个不是 blank 字符的位置（所谓 blank 字符就是空格，tab，换行，回车等）")]),v._v(" "),e("li",[e("code",[v._v("$")]),v._v(" → 到本行行尾")]),v._v(" "),e("li",[e("code",[v._v("g_")]),v._v(" → 到本行最后一个不是 blank 字符的位置。")]),v._v(" "),e("li",[e("code",[v._v("/pattern")]),v._v(" → 搜索 "),e("code",[v._v("pattern")]),v._v(" 的字符串（注：如果搜索出多个匹配，可按 n 键到下一个）")])])])]),v._v(" "),e("li",[e("p",[v._v("拷贝/粘贴")]),v._v(" "),e("p",[v._v("（注：p/P 都可以，p 是表示在当前位置之后，P 表示在当前位置之前）")]),v._v(" "),e("blockquote",[e("ul",[e("li",[e("code",[v._v("P")]),v._v(" → 粘贴")]),v._v(" "),e("li",[e("code",[v._v("yy")]),v._v(" → 拷贝当前行当行于 "),e("code",[v._v("ddP")])])])])]),v._v(" "),e("li",[e("p",[v._v("Undo/Redo")]),v._v(" "),e("blockquote",[e("ul",[e("li",[e("code",[v._v("u")]),v._v(" → undo")]),v._v(" "),e("li",[e("code",[v._v("<C-r>")]),v._v(" → redo")])])])]),v._v(" "),e("li",[e("p",[v._v("打开/保存/退出/改变文件")]),v._v(" "),e("p",[v._v("(Buffer)")]),v._v(" "),e("blockquote",[e("ul",[e("li",[e("code",[v._v(":e <path/to/file>")]),v._v(" → 打开一个文件")]),v._v(" "),e("li",[e("code",[v._v(":w")]),v._v(" → 存盘")]),v._v(" "),e("li",[e("code",[v._v(":saveas <path/to/file>")]),v._v(" → 另存为 "),e("code",[v._v("<path/to/file>")])]),v._v(" "),e("li",[e("code",[v._v(":x")]),v._v("， "),e("code",[v._v("ZZ")]),v._v(" 或 "),e("code",[v._v(":wq")]),v._v(" → 保存并退出 ("),e("code",[v._v(":x")]),v._v(" 表示仅在需要时保存，ZZ 不需要输入冒号并回车)")]),v._v(" "),e("li",[e("code",[v._v(":q!")]),v._v(" → 退出不保存 "),e("code",[v._v(":qa!")]),v._v(" 强行退出所有的正在编辑的文件，就算别的文件有更改。")]),v._v(" "),e("li",[e("code",[v._v(":bn")]),v._v(" 和 "),e("code",[v._v(":bp")]),v._v(" → 你可以同时打开很多文件，使用这两个命令来切换下一个或上一个文件。（注：我喜欢使用:n 到下一个文件）")])])])])]),v._v(" "),e("p",[v._v("花点时间熟悉一下上面的命令，一旦你掌握他们了，你就几乎可以干其它编辑器都能干的事了。但是到现在为止，你还是觉得使用 vim 还是有点笨拙，不过没关系，你可以进阶到第三级了。")]),v._v(" "),e("h3",{attrs:{id:"_2-3-更好，更强，更快"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-更好，更强，更快"}},[v._v("#")]),v._v(" 2.3. 更好，更强，更快")]),v._v(" "),e("p",[v._v("先恭喜你！你干的很不错。我们可以开始一些更为有趣的事了。在第三级，我们只谈那些和 vi 可以兼容的命令。")]),v._v(" "),e("h4",{attrs:{id:"_2-3-1-更好"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-更好"}},[v._v("#")]),v._v(" 2.3.1. 更好")]),v._v(" "),e("p",[v._v("下面，让我们看一下 vim 是怎么重复自己的：1515G")]),v._v(" "),e("ol",[e("li",[e("code",[v._v(".")]),v._v(" → (小数点) 可以重复上一次的命令")]),v._v(" "),e("li",[e("code",[v._v("N<command>")]),v._v(" → 重复某个命令 N 次")])]),v._v(" "),e("p",[v._v("下面是一个示例，找开一个文件你可以试试下面的命令：")]),v._v(" "),e("blockquote",[e("ul",[e("li",[e("code",[v._v("2dd")]),v._v(" → 删除 2 行")]),v._v(" "),e("li",[e("code",[v._v("3p")]),v._v(" → 粘贴文本 3 次")]),v._v(" "),e("li",[e("code",[v._v("100idesu [ESC]")]),v._v(" → 会写下 “desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu “")]),v._v(" "),e("li",[e("code",[v._v(".")]),v._v(" → 重复上一个命令—— 100 “desu “.")]),v._v(" "),e("li",[e("code",[v._v("3.")]),v._v(" → 重复 3 次 “desu” (注意：不是 300，你看，VIM 多聪明啊).")])])]),v._v(" "),e("h4",{attrs:{id:"_2-3-2-更强"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-更强"}},[v._v("#")]),v._v(" 2.3.2. 更强")]),v._v(" "),e("p",[v._v("你要让你的光标移动更有效率，你一定要了解下面的这些命令，"),e("strong",[v._v("千万别跳过")]),v._v("。")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("N"),e("code",[v._v("G")]),v._v(" → 到第 N 行 （注：注意命令中的 G 是大写的，另我一般使用 : N 到第 N 行，如 :137 到第 137 行）")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("gg")]),v._v(" → 到第一行。（注：相当于 1G，或 :1）")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("G")]),v._v(" → 到最后一行。")])]),v._v(" "),e("li",[e("p",[v._v("按单词移动：")]),v._v(" "),e("blockquote",[e("ol",[e("li",[e("code",[v._v("w")]),v._v(" → 到下一个单词的开头。")]),v._v(" "),e("li",[e("code",[v._v("e")]),v._v(" → 到下一个单词的结尾。")])]),v._v(" "),e("p",[v._v("> 如果你认为单词是由默认方式，那么就用小写的 e 和 w。默认上来说，一个单词由字母，数字和下划线组成（注：程序变量）")]),v._v(" "),e("p",[v._v("> 如果你认为单词是由 blank 字符分隔符，那么你需要使用大写的 E 和 W。（注：程序语句）")]),v._v(" "),e("p",[e("br"),e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/3101171-46f752c581d79057.jpg",alt:"img"}}),e("br")])])])]),v._v(" "),e("p",[v._v("下面，让我来说说最强的光标移动：")]),v._v(" "),e("blockquote",[e("ul",[e("li",[e("code",[v._v("%")]),v._v(" : 匹配括号移动，包括 "),e("code",[v._v("(")]),v._v(", "),e("code",[v._v("{")]),v._v(", "),e("code",[v._v("[")]),v._v(". （注：你需要把光标先移到括号上）")]),v._v(" "),e("li",[e("code",[v._v("*")]),v._v(" 和 "),e("code",[v._v("#")]),v._v(": 匹配光标当前所在的单词，移动光标到下一个（或上一个）匹配单词（*是下一个，#是上一个）")])])]),v._v(" "),e("p",[v._v("相信我，上面这三个命令对程序员来说是相当强大的。")]),v._v(" "),e("h4",{attrs:{id:"_2-3-3-更快"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-更快"}},[v._v("#")]),v._v(" 2.3.3. 更快")]),v._v(" "),e("p",[v._v("你一定要记住光标的移动，因为很多命令都可以和这些移动光标的命令连动。很多命令都可以如下来干：")]),v._v(" "),e("p",[e("code",[v._v("<start position><command><end position>")])]),v._v(" "),e("p",[v._v("例如 "),e("code",[v._v("0y$")]),v._v(" 命令意味着：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("0")]),v._v(" → 先到行头")]),v._v(" "),e("li",[e("code",[v._v("y")]),v._v(" → 从这里开始拷贝")]),v._v(" "),e("li",[e("code",[v._v("$")]),v._v(" → 拷贝到本行最后一个字符")])]),v._v(" "),e("p",[v._v("你可可以输入 "),e("code",[v._v("ye")]),v._v("，从当前位置拷贝到本单词的最后一个字符。")]),v._v(" "),e("p",[v._v("你也可以输入 "),e("code",[v._v("y2/foo")]),v._v(" 来拷贝 2 个 “foo” 之间的字符串。")]),v._v(" "),e("p",[v._v("还有很多时间并不一定你就一定要按 y 才会拷贝，下面的命令也会被拷贝：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("d")]),v._v(" (删除 )")]),v._v(" "),e("li",[e("code",[v._v("v")]),v._v(" (可视化的选择)")]),v._v(" "),e("li",[e("code",[v._v("gU")]),v._v(" (变大写)")]),v._v(" "),e("li",[e("code",[v._v("gu")]),v._v(" (变小写)")]),v._v(" "),e("li",[v._v("等等")])]),v._v(" "),e("p",[v._v("（注：可视化选择是一个很有意思的命令，你可以先按 v，然后移动光标，你就会看到文本被选择，然后，你可能 d，也可 y，也可以变大写等）")]),v._v(" "),e("h3",{attrs:{id:"_2-4-vim-超能力"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-vim-超能力"}},[v._v("#")]),v._v(" 2.4. Vim 超能力")]),v._v(" "),e("p",[v._v("你只需要掌握前面的命令，你就可以很舒服的使用 VIM 了。但是，现在，我们向你介绍的是 VIM 杀手级的功能。下面这些功能是我只用 vim 的原因。")]),v._v(" "),e("h4",{attrs:{id:"_2-4-1-在当前行上移动光标-0-fftt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-在当前行上移动光标-0-fftt"}},[v._v("#")]),v._v(" 2.4.1. 在当前行上移动光标: "),e("code",[v._v("0")]),v._v(" "),e("code",[v._v("^")]),v._v(" "),e("code",[v._v("####")]),v._v("f"),e("code",[v._v("F")]),v._v("t"),e("code",[v._v("T")]),v._v(",``;`")]),v._v(" "),e("blockquote",[e("ul",[e("li",[e("code",[v._v("0")]),v._v(" → 到行头")]),v._v(" "),e("li",[e("code",[v._v("^")]),v._v(" → 到本行的第一个非 blank 字符")]),v._v(" "),e("li",[e("code",[v._v("$")]),v._v(" → 到行尾")]),v._v(" "),e("li",[e("code",[v._v("g_")]),v._v(" → 到本行最后一个不是 blank 字符的位置。")]),v._v(" "),e("li",[e("code",[v._v("fa")]),v._v(" → 到下一个为 a 的字符处，你也可以 fs 到下一个为 s 的字符。")]),v._v(" "),e("li",[e("code",[v._v("t,")]),v._v(" → 到逗号前的第一个字符。逗号可以变成其它字符。")]),v._v(" "),e("li",[e("code",[v._v("3fa")]),v._v(" → 在当前行查找第三个出现的 a。")]),v._v(" "),e("li",[e("code",[v._v("F")]),v._v(" 和 "),e("code",[v._v("T")]),v._v(" → 和 "),e("code",[v._v("f")]),v._v(" 和 "),e("code",[v._v("t")]),v._v(" 一样，只不过是相反方向。\n"),e("br"),e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/3101171-00835b8316330c58.jpg",alt:"img"}}),e("br")])])]),v._v(" "),e("p",[v._v("还有一个很有用的命令是 "),e("code",[v._v('dt"')]),v._v(" → 删除所有的内容，直到遇到双引号—— "),e("code",[v._v('"。')])]),v._v(" "),e("h4",{attrs:{id:"_2-4-2-区域选择-action-a-object-或-action-i-object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-2-区域选择-action-a-object-或-action-i-object"}},[v._v("#")]),v._v(" 2.4.2. 区域选择 "),e("code",[v._v("<action>a<object>")]),v._v(" 或 "),e("code",[v._v("<action>i<object>")])]),v._v(" "),e("p",[v._v("在 visual 模式下，这些命令很强大，其命令格式为")]),v._v(" "),e("p",[e("code",[v._v("<action>a<object>")]),v._v(" 和 "),e("code",[v._v("<action>i<object>")])]),v._v(" "),e("ul",[e("li",[v._v("action 可以是任何的命令，如 "),e("code",[v._v("d")]),v._v(" (删除), "),e("code",[v._v("y")]),v._v(" (拷贝), "),e("code",[v._v("v")]),v._v(" (可以视模式选择)。")]),v._v(" "),e("li",[v._v("object 可能是： "),e("code",[v._v("w")]),v._v(" 一个单词， "),e("code",[v._v("W")]),v._v(" 一个以空格为分隔的单词， "),e("code",[v._v("s")]),v._v(" 一个句字， "),e("code",[v._v("p")]),v._v(" 一个段落。也可以是一个特别的字符："),e("code",[v._v('"、')]),v._v(" "),e("code",[v._v("'、")]),v._v(" "),e("code",[v._v(")、")]),v._v(" "),e("code",[v._v("}、")]),v._v(" "),e("code",[v._v("]。")])])]),v._v(" "),e("p",[v._v("假设你有一个字符串 "),e("code",[v._v('(map (+) ("foo"))')]),v._v(".而光标键在第一个 "),e("code",[v._v("o")]),v._v("的位置。")]),v._v(" "),e("blockquote",[e("ul",[e("li",[e("code",[v._v('vi"')]),v._v(" → 会选择 "),e("code",[v._v("foo")]),v._v(".")]),v._v(" "),e("li",[e("code",[v._v('va"')]),v._v(" → 会选择 "),e("code",[v._v('"foo"')]),v._v(".")]),v._v(" "),e("li",[e("code",[v._v("vi)")]),v._v(" → 会选择 "),e("code",[v._v('"foo"')]),v._v(".")]),v._v(" "),e("li",[e("code",[v._v("va)")]),v._v(" → 会选择"),e("code",[v._v('("foo")')]),v._v(".")]),v._v(" "),e("li",[e("code",[v._v("v2i)")]),v._v(" → 会选择 "),e("code",[v._v('map (+) ("foo")')])]),v._v(" "),e("li",[e("code",[v._v("v2a)")]),v._v(" → 会选择 "),e("code",[v._v('(map (+) ("foo"))')])])])]),v._v(" "),e("p",[e("br"),e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/3101171-0b109d66a6111c83.png",alt:"img"}}),e("br")]),v._v(" "),e("h4",{attrs:{id:"_2-4-3-块操作-c-v"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-3-块操作-c-v"}},[v._v("#")]),v._v(" 2.4.3. 块操作: "),e("code",[v._v("<C-v>")])]),v._v(" "),e("p",[v._v("块操作，典型的操作： "),e("code",[v._v("0 <C-v> <C-d> I-- [ESC]")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("^")]),v._v(" → 到行头")]),v._v(" "),e("li",[e("code",[v._v("<C-v>")]),v._v(" → 开始块操作")]),v._v(" "),e("li",[e("code",[v._v("<C-d>")]),v._v(" → 向下移动 (你也可以使用 hjkl 来移动光标，或是使用%，或是别的)")]),v._v(" "),e("li",[e("code",[v._v("I-- [ESC]")]),v._v(" → I 是插入，插入“"),e("code",[v._v("--")]),v._v("”，按 ESC 键来为每一行生效。")])]),v._v(" "),e("p",[e("br"),e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/3101171-8b093a0f65707949.gif?imageMogr2/auto-orient/strip",alt:"img"}}),e("br")]),v._v(" "),e("p",[v._v("在 Windows 下的 vim，你需要使用 "),e("code",[v._v("<C-q>")]),v._v(" 而不是 "),e("code",[v._v("<C-v>")]),v._v(" ，"),e("code",[v._v("<C-v>")]),v._v(" 是拷贝剪贴板。")]),v._v(" "),e("h4",{attrs:{id:"_2-4-4-自动提示：-c-n-和-c-p"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-4-自动提示：-c-n-和-c-p"}},[v._v("#")]),v._v(" 2.4.4. 自动提示： "),e("code",[v._v("<C-n>")]),v._v(" 和 "),e("code",[v._v("<C-p>")])]),v._v(" "),e("p",[v._v("在 Insert 模式下，你可以输入一个词的开头，然后按 "),e("code",[v._v("<C-p>或是<C-n>，自动补齐功能就出现了……")])]),v._v(" "),e("p",[e("br"),e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/3101171-e2ae877e67880ff7.gif?imageMogr2/auto-orient/strip",alt:"img"}}),e("br")]),v._v(" "),e("h4",{attrs:{id:"_2-4-5-宏录制：-qa-操作序列-q-a"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-5-宏录制：-qa-操作序列-q-a"}},[v._v("#")]),v._v(" 2.4.5. 宏录制： "),e("code",[v._v("qa")]),v._v(" 操作序列 "),e("code",[v._v("q")]),v._v(", "),e("code",[v._v("@a")]),v._v(", "),e("code",[v._v("@@")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("qa")]),v._v(" 把你的操作记录在寄存器 "),e("code",[v._v("a。")])]),v._v(" "),e("li",[v._v("于是 "),e("code",[v._v("@a")]),v._v(" 会 replay 被录制的宏。")]),v._v(" "),e("li",[e("code",[v._v("@@")]),v._v(" 是一个快捷键用来 replay 最新录制的宏。")])]),v._v(" "),e("blockquote",[e("p",[e("strong",[v._v("示例")])]),v._v(" "),e("p",[v._v("在一个只有一行且这一行只有“1”的文本中，键入如下命令：")]),v._v(" "),e("ul",[e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("qaYp<C-a>q\n")])])]),e("p",[v._v("→")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("qa")]),v._v(" 开始录制")]),v._v(" "),e("li",[e("code",[v._v("Yp")]),v._v(" 复制行.")]),v._v(" "),e("li",[e("code",[v._v("<C-a>")]),v._v(" 增加 1.")]),v._v(" "),e("li",[e("code",[v._v("q")]),v._v(" 停止录制.")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("@a")]),v._v(" → 在 1 下面写下 2")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("@@")]),v._v(" → 在 2 正面写下 3")])]),v._v(" "),e("li",[e("p",[v._v("现在做 "),e("code",[v._v("100@@")]),v._v(" 会创建新的 100 行，并把数据增加到 103.")])])])]),v._v(" "),e("p",[e("br"),e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/3101171-f1889f8bca723964.gif?imageMogr2/auto-orient/strip",alt:"img"}}),e("br")]),v._v(" "),e("h4",{attrs:{id:"_2-4-6-可视化选择：-v-v-c-v"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-6-可视化选择：-v-v-c-v"}},[v._v("#")]),v._v(" 2.4.6. 可视化选择： "),e("code",[v._v("v")]),v._v(","),e("code",[v._v("V")]),v._v(","),e("code",[v._v("<C-v>")])]),v._v(" "),e("p",[v._v("前面，我们看到了 "),e("code",[v._v("<C-v>")]),v._v("的示例 （在 Windows 下应该是"),e("C-q",[v._v("），我们可以使用 "),e("code",[v._v("v")]),v._v(" 和 "),e("code",[v._v("V")]),v._v("。一但被选好了，你可以做下面的事：")])],1),v._v(" "),e("ul",[e("li",[e("code",[v._v("J")]),v._v(" → 把所有的行连接起来（变成一行）")]),v._v(" "),e("li",[e("code",[v._v("<")]),v._v(" 或 "),e("code",[v._v(">")]),v._v(" → 左右缩进")]),v._v(" "),e("li",[e("code",[v._v("=")]),v._v(" → 自动给缩进 （注：这个功能相当强大，我太喜欢了）")])]),v._v(" "),e("p",[e("br"),e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/3101171-fe1e19983fca213f.gif?imageMogr2/auto-orient/strip",alt:"img"}}),e("br")]),v._v(" "),e("p",[v._v("在所有被选择的行后加上点东西：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("<C-v>")])]),v._v(" "),e("li",[v._v("选中相关的行 (可使用 "),e("code",[v._v("j")]),v._v(" 或 "),e("code",[v._v("<C-d>")]),v._v(" 或是 "),e("code",[v._v("/pattern")]),v._v(" 或是 "),e("code",[v._v("%")]),v._v(" 等……)")]),v._v(" "),e("li",[e("code",[v._v("$")]),v._v(" 到行最后")]),v._v(" "),e("li",[e("code",[v._v("A")]),v._v(", 输入字符串，按 "),e("code",[v._v("ESC。")])])]),v._v(" "),e("p",[e("br"),e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/3101171-b192601247334c4e.gif?imageMogr2/auto-orient/strip",alt:"img"}}),e("br")]),v._v(" "),e("h4",{attrs:{id:"_2-4-7-分屏-split-和-vsplit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-7-分屏-split-和-vsplit"}},[v._v("#")]),v._v(" 2.4.7. 分屏: "),e("code",[v._v(":split")]),v._v(" 和 "),e("code",[v._v("vsplit")]),v._v(".")]),v._v(" "),e("p",[v._v("下面是主要的命令，你可以使用 VIM 的帮助 "),e("code",[v._v(":help split")]),v._v(". 你可以参考本站以前的一篇文章"),e("a",{attrs:{href:"https://coolshell.cn/articles/1679.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("VIM 分屏"),e("OutboundLink")],1),v._v("。")]),v._v(" "),e("blockquote",[e("ul",[e("li",[e("code",[v._v(":split")]),v._v(" → 创建分屏 ("),e("code",[v._v(":vsplit")]),v._v("创建垂直分屏)")]),v._v(" "),e("li",[e("code",[v._v("<C-w><dir>")]),v._v(" : dir 就是方向，可以是 "),e("code",[v._v("hjkl")]),v._v(" 或是 ←↓↑→ 中的一个，其用来切换分屏。")]),v._v(" "),e("li",[e("code",[v._v("<C-w>_")]),v._v(" (或 "),e("code",[v._v("<C-w>|")]),v._v(") : 最大化尺寸 ("),e("C-w",[v._v("| 垂直分屏)")])],1),v._v(" "),e("li",[e("code",[v._v("<C-w>+")]),v._v(" (或 "),e("code",[v._v("<C-w>-")]),v._v(") : 增加尺寸")])])]),v._v(" "),e("p",[e("br"),e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/3101171-f329d01e299cb366.gif?imageMogr2/auto-orient/strip",alt:"img"}}),e("br")]),v._v(" "),e("h2",{attrs:{id:"_3-vim-cheat-sheet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-vim-cheat-sheet"}},[v._v("#")]),v._v(" 3. Vim Cheat Sheet")]),v._v(" "),e("blockquote",[e("p",[v._v("本节内容的原文地址："),e("a",{attrs:{href:"http://cenalulu.github.io/linux/all-vim-cheatsheat/",target:"_blank",rel:"noopener noreferrer"}},[v._v("http://cenalulu.github.io/linux/all-vim-cheatsheat/"),e("OutboundLink")],1)])]),v._v(" "),e("h3",{attrs:{id:"_3-1-经典版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-经典版"}},[v._v("#")]),v._v(" 3.1. 经典版")]),v._v(" "),e("p",[v._v("下面这个键位图应该是大家最常看见的经典版了。其实这个版本是一系列的入门教程键位图的组合结果。要查看不同编辑模式下的键位图，可以看"),e("a",{attrs:{href:"http://www.viemu.com/a_vi_vim_graphical_cheat_sheet_tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("这里打包下载"),e("OutboundLink")],1)]),v._v(" "),e("p",[v._v("此外，"),e("a",{attrs:{href:"http://blog.ngedit.com/vi-vim-cheat-sheet-sch.gif",target:"_blank",rel:"noopener noreferrer"}},[v._v("这里"),e("OutboundLink")],1),v._v("还有简体中文版。")]),v._v(" "),e("p",[e("br"),e("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/os/linux/vim/vim-cheat-sheet.png!zp",alt:"img"}}),e("br")]),v._v(" "),e("h3",{attrs:{id:"_3-2-入门版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-入门版"}},[v._v("#")]),v._v(" 3.2. 入门版")]),v._v(" "),e("p",[v._v("基本操作的入门版。"),e("a",{attrs:{href:"https://github.com/ahrencode/Miscellaneous",target:"_blank",rel:"noopener noreferrer"}},[v._v("原版出处"),e("OutboundLink")],1),v._v("还有 keynote 版本可供 DIY 以及其他相关有用的 cheatsheet。")]),v._v(" "),e("p",[e("br"),e("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/os/linux/vim/basic-vim-cheat-sheet.png!zp",alt:"img"}}),e("br")]),v._v(" "),e("h3",{attrs:{id:"_3-3-进阶版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-进阶版"}},[v._v("#")]),v._v(" 3.3. 进阶版")]),v._v(" "),e("p",[v._v("下图是 300DPI 的超清大图，另外"),e("a",{attrs:{href:"http://michael.peopleofhonoronly.com/vim/",target:"_blank",rel:"noopener noreferrer"}},[v._v("查看原文"),e("OutboundLink")],1),v._v("还有更多版本：黑白，低分辨率，色盲等")]),v._v(" "),e("p",[e("br"),e("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/os/linux/vim/vim-cheat-sheet-for-programmers.png!zp",alt:"img"}}),e("br")]),v._v(" "),e("h3",{attrs:{id:"_3-4-增强版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-增强版"}},[v._v("#")]),v._v(" 3.4. 增强版")]),v._v(" "),e("p",[v._v("下图是一个更新时间较新的现代版，含有的信息也更丰富。"),e("a",{attrs:{href:"http://vimcheatsheet.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("原文链接"),e("OutboundLink")],1)]),v._v(" "),e("p",[e("br"),e("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/os/linux/vim/vim-cheat-sheet-02.png!zp",alt:"img"}}),e("br")]),v._v(" "),e("h3",{attrs:{id:"_3-5-文字版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-文字版"}},[v._v("#")]),v._v(" 3.5. 文字版")]),v._v(" "),e("p",[e("a",{attrs:{href:"http://tnerual.eriogerg.free.fr/vimqrc.pdf",target:"_blank",rel:"noopener noreferrer"}},[v._v("原文链接"),e("OutboundLink")],1)]),v._v(" "),e("p",[e("br"),e("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/os/linux/vim/vim-cheat-sheet-text-01.png!zp",alt:"img"}}),e("br")]),v._v(" "),e("p",[e("br"),e("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/os/linux/vim/vim-cheat-sheet-text-02.png!zp",alt:"img"}}),e("br")]),v._v(" "),e("h2",{attrs:{id:"_4-资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-资料"}},[v._v("#")]),v._v(" 4. 资料")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://coolshell.cn/articles/5426.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("简明 VIM 练级攻略"),e("OutboundLink")],1),v._v(" ，Vim 渐进学习内容来源于这篇文章，作为 Vim 新手，我觉得入门效果很好。")]),v._v(" "),e("li",[e("a",{attrs:{href:"https://vim.sourceforge.io/docs.php",target:"_blank",rel:"noopener noreferrer"}},[v._v("vim 官方文档"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/mhinz/vim-galore",target:"_blank",rel:"noopener noreferrer"}},[v._v("vim-galore"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"http://www.jianshu.com/p/bcbe916f97e1",target:"_blank",rel:"noopener noreferrer"}},[v._v("Vim 入门基础"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=o.exports}}]);