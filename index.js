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
    blocks: {
        rule_do: {
            process: function(block) {
                return _rule_block.render(block, this.renderInline, 'do');
            }
        },
        rule_consider: {
            process: function(block) {
                return _rule_block.render(block, this.renderInline, 'consider');
            }
        },
        rule_avoid: {
            process: function(block) {
                return _rule_block.render(block, this.renderInline, 'avoid');
            }
        },
        rule_why: {
            process: function(block) {
                return _rule_block.render(block, this.renderInline, 'why');
            }
        },
        code_bad_file: {
            process: function(block) {
                return _code_block.render(block, this.renderInline, 'bad');
            }
        },
        code_good_file: {
            process: function(block) {
                return _code_block.render(block, this.renderInline, 'good');
            }
        }
    }
};