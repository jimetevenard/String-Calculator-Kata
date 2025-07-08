(function () {
    Flems(document.getElementById('flems-editor'), {
        files: [
            {
                name: 'sum.js',
                content: '/**\n *  Create a simple String Calculator function.\n *  \n *  The input is a string, the method can take up to two numbers,\n *  separated by commas, and will return their sum as a number. \n *\n *  For example, it must take “” or “1” or “1,2” as inputs.\n *  - "1,2" should return 3\n *  - "42" should return 42.\n *\n *  For an empty string: "", it will return 0 \n */\nfunction calculateSum(){\n\n}'
            },
            {
                name: 'sum.test.js',
                content: 'mocha.setup("bdd");\nconst assert = chai.assert, expect = chai.expect;\n\n// "Chai" assertion library - documentation:\n// https://www.chaijs.com/api/assert/\n\ndescribe("Some passing tests:", () => {\n  /**\n   * NB: The test cases below are EXAMPLES.\n   *     Feel free to modify them to test your actual work.\n   */\n  it("2 + 2 is equal to 4", () => {\n    assert.equal( (2 + 2) , 4);\n  });\n  it("4 + 4 is equal to 8", () => {\n    assert.equal( (4 + 4) , 8);\n  });\n  it("These characters\' names are not equal", () => {\n    assert.notEqual( "Dom Juan" , "Sganarelle" );\n  });\n});\ndescribe("A non-passing test:", () => {\n  it("2 + 2 equal to 8", () => {\n    assert.equal( (2 + 2) , 8);\n  });\n});\n\nmocha.run();'
            }
        ],
        links: [
            {
                name: 'mocha-html-init',
                type: 'script',
                // FixMe : bring this script here
                url: 'https://gist.githubusercontent.com/jimetevenard/7ce604732ebf1100e1fb1aadd9e21af9/raw/4d3cf23f00ddbd90bcdaba5a505bf1cc8b3f0642/prepare-mocha.js'
            }, {
                name: 'mocha.css',
                type: 'style',
                url: 'https://unpkg.com/mocha@10.2.0/mocha.css'
            }, {
                name: 'chai',
                type: 'script',
                url: 'https://unpkg.com/chai@4.3.8/chai.js'
            }, {
                name: 'mocha',
                type: 'script',
                url: 'https://unpkg.com/mocha@10.2.0/mocha.js'
            }
        ],
        selected: 'summ.js',
        linkTabs: false,
        middle: 65
    });
})();

