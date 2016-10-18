'use strict'

let _rule_block = {
    render: function(block, renderFunc, rule) {
        return renderFunc('markdown', block.body).then(function(str) {
            var result = `<div class="s-rule ${rule}">${str}</div>`;
            return result;
        });
    }
}

let _code_block = {
    render: function(block, renderFunc, style){
        return renderFunc('markdown', block.body).then(function(str){
            var result = `<div class="code ${style}">${str}</div>`;
            return result;
        })
    }
}

module.exports = {
    book: {
        assets: './assets',
        css: ['plugin.css']
    },
    ebook: {
        assets: './assets',
        css: ['plugin.css']
    },
    blocks: {
        rule_do: {
            shortcuts: {
                parsers: ["markdown", "asciidoc", "restructuredtext"],
                start: "$do",
                end: "do$"
            },
            process: function(block) {
                return _rule_block.render(block, this.renderBlock, 'do');
            }
        },
        rule_consider: {
            shortcuts: {
                parsers: ["markdown", "asciidoc", "restructuredtext"],
                start: "$consider",
                end: "consider$"
            },
            process: function(block) {
                return _rule_block.render(block, this.renderBlock, 'consider');
            }
        },
        rule_avoid: {
            shortcuts: {
                parsers: ["markdown", "asciidoc", "restructuredtext"],
                start: "$avoid",
                end: "avoid$"
            },
            process: function(block) {
                return _rule_block.render(block, this.renderBlock, 'avoid');
            }
        },
        rule_why: {
            shortcuts: {
                parsers: ["markdown", "asciidoc", "restructuredtext"],
                start: "$why",
                end: "why$"
            },
            process: function(block) {
                return _rule_block.render(block, this.renderBlock, 'why');
            }
        },
        code_bad_file: {
            shortcuts: {
                parsers: ["markdown", "asciidoc", "restructuredtext"],
                start: "$bad-code",
                end: "bad-code$"
            },
            process: function(block) {
                return _code_block.render(block, this.renderBlock, 'bad');
            }
        },
        code_good_file: {
            shortcuts: {
                parsers: ["markdown", "asciidoc", "restructuredtext"],
                start: "$good-code",
                end: "good-code$"
            },
            process: function(block) {
                return _code_block.render(block, this.renderBlock, 'good');
            }
        }
    }
};