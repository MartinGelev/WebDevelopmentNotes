let data = [
    {
        "title": "Fundamentals of HTML",
        "content": [
            {
                "title": "Elements",
                "content": [
                    {
                        "title": "HTML",
                        "text": ["HTML (HyperText Markup Language) is used to give content to a web page and instructs web browsers on how to structure that content."]
                    },
                    {
                        "title": "Element Content",
                        "text": [
                            "The content of an HTML element is the information between the opening and closing tags of an element."
                        ],
                        "code": [
                            "<h1>Codecademy is awesome! 🙂</h1>"
                        ]
                    },
                    {
                        "title": "<li> List Item Element",
                        "text": [
                            "The <li> list item element create list items inside:",
                            [
                                "Ordered lists <ol>",
                                "Unordered lists <ul>"
                            ]
                        ],
                        "code": [
                            "<ol>",
                            "  <li>Head east on Prince St</li>",
                            "  <li>Turn left on Elizabeth</li>",
                            "</ol>",
                            "<ul>",
                            "  <li>Cookies</li>",
                            "  <li>Milk</li>",
                            "</ul>"
                        ]
                    },
                    {
                        "title": "<video> Video Element",
                        "text": [
                            "The <video> element embeds a media player for video playback. The src attribute will contain the URL to the video. Adding the controls attribute will display video controls in the media player.",
                            "Note: The content inside the opening and closing tag is shown as a fallback in browsers that don’t support the element."
                        ],
                        "code": [
                            "< video src = 'test-video.mp4' controls > ",
                            "  Video not supported",
                            "</video>"
                        ]
                    },
                    {
                        "title": "<em> Emphasis Element",
                        "text": [
                            "The <em> emphasis element emphasizes text and browsers will usually italicize the emphasized text by default."
                        ],
                        "code": [
                            "<p>This <em>word</em> will be emphasized in italics.</p>"
                        ]
                    },
                    {
                        "title": "<ol> Ordered List Element",
                        "text": [
                            "The <ol> ordered list element creates a list of items in sequential order. Each list item appears numbered by default."
                        ],
                        "code": [
                            "<ol>",
                            "  <li>Preheat oven to 325 F 👩‍🍳</li>",
                            "  <li>Drop cookie dough 🍪</li>",
                            "  <li>Bake for 15 min ⏰</li>",
                            "</ol>"
                        ]
                    },
                    {
                        "title": "<div> Div Element",
                        "text": [
                            "The <div> element is used as a container that divides an HTML document into sections and is short for “division”. <div> elements can contain flow content such as headings, paragraphs, links, images, etc."
                        ],
                        "code": [
                            "< div > ",
                            "  <h1>A section of grouped elements</h1>",
                            "  <p>Here’s some text for the section</p>",
                            "</div>",
                            "<div>",
                            "  <h1>Second section of grouped elements</h1>",
                            "  <p>Here’s some text</p>",
                            "</div>"
                        ]
                    },
                    {
                        "title": "HTML Structure",
                        "text": [
                            "HTML is organized into a family tree structure. HTML elements can have parents, grandparents, siblings, children, grandchildren, etc."
                        ],
                        "code": [
                            "<body>",
                            "  <div>",
                            "    <h1>It's div's child and body's grandchild</h1>",
                            "    <h2>It's h1's sibling</h2>",
                            "  </div>",
                            "</body>"
                        ]
                    },
                    {
                        "title": "Closing Tag",
                        "text": [
                            "An HTML closing tag is used to denote the end of an HTML element. The syntax for a closing tag is a left angle bracket < followed by a forward slash / then the element name and a right angle bracket to close >."
                        ],
                        "code": [
                            "<body>",
                            "  ...",
                            "</body>"
                        ]
                    },
                    {
                        "title": "Attribute Name and Values",
                        "text": [
                            "HTML attributes consist of a name and a value using the following syntax: name='value' and can be added to the opening tag of an HTML element to configure or change the behavior of the element."
                        ],
                        "code": [
                            "<elementName name='value'></elementName>"
                        ]
                    },
                    {
                        "title": "<br> Line Break Element",
                        "text": [
                            "The <br> line break element will create a line break in text and is especially useful where a division of text is required, like in a postal address. The line break element requires only an opening tag and must not have a closing tag."
                        ],
                        "code": [
                            "A line break haiku.<br>",
                            "Poems are a great use case.<br>",
                            "Oh joy! A line break."
                        ]
                    },
                    {
                        "title": "<img> Image Element",
                        "text": [
                            "HTML image <img> elements embed images in documents. The src attribute contains the image URL and is mandatory. <img> is an empty element meaning it should not have a closing tag."
                        ],
                        "code": [
                            "<img src='image.png'>"
                        ]
                    },
                    {
                        "title": "<h1>-<h6> Heading Elements",
                        "text": [
                            "HTML can use six different levels of heading elements. The heading elements are ordered from the highest level <h1> to the lowest level <h6>."
                        ],
                        "code": [
                            "<h1>Breaking News</h1>",
                            "<h2>This is the 1st subheading</h2>",
                            "<h3>This is the 2nd subheading</h3>",
                            "...",
                            "<h6>This is the 5th subheading</h6>"
                        ]
                    },
                    {
                        "title": "<p> Paragraph Element",
                        "text": [
                            "The <p> paragraph element contains and displays a block of text."
                        ],
                        "code": [
                            "<p>This is a block of text! Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>"
                        ]
                    },
                    {
                        "title": "Unique ID Attributes",
                        "text": [
                            "In HTML, specific and unique id attributes can be assigned to different elements in order to differentiate between them.",
                            "When needed, the id value can be called upon by CSS and JavaScript to manipulate, format, and perform specific instructions on that element and that element only. Valid id attributes should begin with a letter and should only contain letters (a-Z), digits (0-9), hyphens (-), underscores (_), and periods (.)."
                        ],
                        "code": [
                            "<h1 id='A1'>Hello World</h1>"
                        ]
                    },
                    {
                        "title": "HTML Attributes",
                        "text": [
                            "HTML attributes are values added to the opening tag of an element to configure the element or change the element’s default behavior. In the provided example, we are giving the <p> (paragraph) element a unique identifier using the id attribute and changing the color of the default text using the style attribute."
                        ],
                        "code": [
                            "<p id='my - paragraph' style='color: green;'>Here’s some text for a paragraph that is being altered by HTML attributes</p>"
                        ]
                    },
                    {
                        "title": "<ul> Unordered List Element",
                        "text": [
                            "The <ul> unordered list element is used to create a list of items in no particular order. Each individual list item will have a bullet point by default."
                        ],
                        "code": [
                            "<ul>",
                            "  <li>Play more music 🎸</li>",
                            "  <li>Read more books 📚</li>",
                            "</ul>"
                        ]
                    },
                    {
                        "title": "alt Attribute",
                        "text": [
                            "An <img> element can have alternative text via the alt attribute. The alternative text will be displayed if an image fails to render due to an incorrect URL, if the image format is not supported by the browser, if the image is blocked from being displayed, or if the image has not been received from the URL.",
                            "The text will be read aloud if screen reading software is used and helps support visually impaired users by providing a text descriptor for the image content on a webpage."
                        ],
                        "code": [
                            "<img src='path / to / image' alt='text describing image' />"
                        ]
                    },
                    {
                        "title": "<body> Body Element",
                        "text": [
                            "The <body> element represents the content of an HTML document. Content inside <body> tags are rendered on the web browsers.",
                            "Note: There can be only one <body> element in a document."
                        ],
                        "code": [
                            "< body >",
                            "  <h1>Learn to code with Codecademy :)</h1>",
                            "</body>"
                        ]
                    },
                    {
                        "title": "<span> Span Element",
                        "text": [
                            "The <span> element is an inline container for text and can be used to group text for styling purposes. However, as <span> is a generic container to separate pieces of text from a larger body of text, its use should be avoided if a more semantic element is available."
                        ],
                        "code": [
                            "<p><span>This text</span> may be styled differently than the surrounding text.</p>"
                        ]
                    },
                    {
                        "title": "<strong> Strong Element",
                        "text": [
                            "The <strong> element highlights important, serious, or urgent text and browsers will normally render this highlighted text in bold by default."
                        ],
                        "code": [
                            "<p>This is <strong>important</strong> text!</p>"
                        ]
                    },
                    {
                        "title": "HTML Element",
                        "text": [
                            "An HTML element is a piece of content in an HTML document and uses the following syntax: opening tag + content + closing tag. In the code provided:",
                            ["<p> is the opening tag.", "Hello World! is the content.", "</p> is the closing tag."]
                        ],
                        "code": [
                            "<p>Hello World!</p>"
                        ]
                    },
                    {
                        "title": "HTML Tag",
                        "text": [
                            "The syntax for a single HTML tag is an opening angle bracket < followed by the element name and a closing angle bracket >. Here is an example of an opening <div> tag."
                        ],
                        "code": [
                            "< div > "
                        ]
                    }
                ]
            },
            {
                "title": "Structure",
                "content": [
                    {
                        "title": "<a> Anchor Element",
                        "text": [
                            "The <a> anchor element is used to create hyperlinks in an HTML document. The hyperlinks can point to other webpages, files on the same server, a location on the same page, or any other URL via the hyperlink reference attribute, href. The href determines the location the anchor element points to."
                        ],
                        "code": [
                            "< !--Creating text links-- > ",
                            "<a href='http://www.codecademy.com'>Visit this site</a>",
                            "<!-- Creating image links -->",
                            "<a href='http://www.codecademy.com'>",
                            "	<img src='logo.jpg'>Click this image",
                            "</a>"
                        ]
                    },
                    {
                        "title": "<head> Head Element",
                        "text": [
                            "The <head> element contains general information about an HTML page that isn’t displayed on the page itself. This information is called metadata and includes things like the title of the HTML document and links to stylesheets."
                        ],
                        "code": [
                            "<!DOCTYPE html>",
                            "<html>",
                            "  <head>",
                            "<a href='http://www.codecademy.com'>",
                            "    <!-- Metadata is contained in this element-->",
                            "  </head>",
                            "</html>"
                        ]
                    },
                    {
                        "title": "<target> Target Attribute",
                        "text": [
                            "The target attribute on an <a> anchor element specifies where a hyperlink should be opened. A target value of '_blank' will tell the browser to open the hyperlink in a new tab in modern browsers, or in a new window in older browsers or if the browser has had settings changed to open hyperlinks in a new window."
                        ],
                        "code": [
                            "<a href='https://www.google.com' target='_blank'>This anchor element links to google and will open in a new tab or window.</a>"
                        ]
                    },
                    {
                        "title": "Indentation",
                        "text": [
                            "HTML code should be formatted such that the indentation level of text increases once for each level of nesting.",
                            "It is a common convention to use two or four space per level of nesting."
                        ],
                        "code": [
                            "<div>",
                            "  <h1>Heading</h1>",
                            "  <ul>",
                            "    <li>Item 1</li>",
                            "    <li>Item 2</li>",
                            "  </ul>",
                            "</div>"
                        ]
                    },
                    {
                        "title": "Link to a Different Part of the Page #",
                        "text": [
                            "The anchor element <a> can create hyperlinks to different parts of the same HTML document using the href attribute to point to the desired location with # followed by the id of the element to link to."
                        ],
                        "code": [
                            "<div>",
                            "  <p id='id - of - element - to - link - to'>A different part of the page!</p>",
                            "</div>",
                            "<a href='#id - of - element - to - link - to'>Take me to a different part of the page</a>"
                        ]
                    },
                    {
                        "title": "<html> HTML Element",
                        "text": [
                            "The <html> element, the root of an HTML document, should be added after the !DOCTYPE declaration. All content/structure for an HTML document should be contained between the opening and closing <html> tags."
                        ],
                        "code": [
                            "<!DOCTYPE html>",
                            "<html>",
                            "  <!-- I'm a comment -->",
                            "</html>"
                        ]
                    },
                    {
                        "title": "Comments",
                        "text": [
                            "In HTML, comments can be added between an opening <!-- and closing -->. Content inside of comments will not be rendered by browsers, and are usually used to describe a part of code or provide other details.",
                            "Comments can span single or multiple lines."
                        ],
                        "code": [
                            "<!-- Main site content -->",
                            "<div>Content</div>",
                            "<!--",
                            "  Comments can be",
                            "  multiple lines long.",
                            "-->"
                        ]
                    },
                    {
                        "title": "Whitespace",
                        "text": [
                            "Whitespace, such as line breaks, added to an HTML document between block-level elements will generally be ignored by the browser and are not added to increase spacing on the rendered HTML page. Rather, whitespace is added for organization and easier reading of the HTML document itself."
                        ],
                        "code": [
                            "<p>Test paragraph</p>",
                            "<!-- The whitespace created by this line, and above/below this line is ignored by the browser-->",
                            "<p>Another test paragraph, this will sit right under the first paragraph, no extra space between.</p>"
                        ]
                    },
                    {
                        "title": "<title> Title Element",
                        "text": [
                            "The <title> element contains a text that defines the title of an HTML document. The title is displayed in the browser’s title bar or tab in which the HTML page is displayed. The <title> element can only be contained inside a document’s <head> element."
                        ],
                        "code": [
                            "<!DOCTYPE html>",
                            "<html>",
                            "  <head>",
                            "    <title>Title of the HTML page</title>",
                            "  </head>",
                            "</html>"
                        ]
                    },
                    {
                        "title": "File Path",
                        "text": [
                            "URL paths in HTML can be absolute paths, like a full URL, for example: https://developer.mozilla.org/en-US/docs/Learn or a relative file path that links to a local file in the same folder or on the same server, for example: ./style.css. Relative file paths begin with ./ followed by a path to the local file. ./ tells the browser to look for the file path from the current folder."
                        ],
                        "code": [
                            "<a href='https://developer.mozilla.org/en-US/docs/Web'>The URL for this anchor element is an absolute file path.</a>",
                            "<a href='./ about.html'>The URL for this anchor element is a relative file path.</a>"
                        ]
                    },
                    {
                        "title": "Document Type Declaration",
                        "text": [
                            "The document type declaration <!DOCTYPE html> is required as the first line of an HTML document. The doctype declaration is an instruction to the browser about what type of document to expect and which version of HTML is being used, in this case it’s HTML5."
                        ],
                        "code": [
                            "< !DOCTYPE html > "
                        ]
                    },
                ]
            },
            {
                "title": "Tables",
                "content": [
                    {
                        "title": "<tr> Table Row Element<tr> Table Row Element",
                        "text": [
                            "The table row element, <tr>, is used to add rows to a table before adding table data and table headings."
                        ],
                        "code": [
                            "<table>",
                            "  <tr>",
                            "    ...",
                            "  </tr>",
                            "</table>"
                        ]
                    },
                    {
                        "title": "<td> Table Data Element",
                        "text": [
                            "The table data element, <td>, can be nested inside a table row element, <tr>, to add a cell of data to a table."
                        ],
                        "code": [
                            "<table>",
                            "  <tr>",
                            "    <td>cell one data</td>",
                            "    <td>cell two data</td>",
                            "  </tr>",
                            "</table>"
                        ]
                    },
                    {
                        "title": "<thead> Table Head Element",
                        "text": [
                            "The table head element, <thead>, defines the headings of table columns encapsulated in table rows."
                        ],
                        "code": [
                            "<table>",
                            " <thead>",
                            "   <tr>",
                            "     <th>heading 1</th>",
                            "     <th>heading 2</th>",
                            "   </tr>",
                            " </thead>",
                            " <tbody>",
                            "   <tr>",
                            "     <td>col 1</td>",
                            "     <td>col 2</td>",
                            "   </tr>",
                            " </tbody>",
                            "</table>"
                        ]
                    },
                    {
                        "title": "rowspan Attribute",
                        "text": [
                            "Similar to colspan, the rowspan attribute on a table header or table data element indicates how many rows that particular cell should span within the table. The rowspan value is set to 1 by default and will take any positive integer up to 65534."
                        ],
                        "code": [
                            "<table>",
                            "  <tr>",
                            "    <th>row 1:</th>",
                            "    <td>col 1</td>",
                            "    <td>col 2</td>",
                            "  </tr>",
                            "  <tr>",
                            "    <th rowspan='2'>row 2 (this row will span 2 rows):</th>",
                            "    <td>col 1</td>",
                            "    <td>col 2</td>",
                            "  </tr>",
                            "  <tr>",
                            "    <td>col 1</td>",
                            "    <td>col 2</td>",
                            "  </tr>",
                            "   <tr>",
                            "    <th>row 3:</th>",
                            "    <td>col 1</td>",
                            "    <td>col 2</td>",
                            "  </tr>",
                            "</table>"
                        ]
                    },
                    {
                        "title": "<tbody> Table Body Element",
                        "text": [
                            "The table body element, <tbody>, is a semantic element that will contain all table data other than table heading and table footer content. If used, <tbody> will contain all table row <tr> elements, and indicates that <tr> elements make up the body of the table. <table> cannot have both <tbody> and <tr> as direct children."
                        ],
                        "code": [
                            "<table>",
                            " <tbody>",
                            "   <tr>",
                            "     <td>row 1</td>",
                            "   </tr>",
                            "   <tr>",
                            "     <td>row 2</td>",
                            "   </tr>",
                            "   <tr>",
                            "     <td>row 3</td>",
                            "   </tr>",
                            " </tbody>",
                            "</table>"
                        ]
                    },
                    {
                        "title": "<th> Table Heading Element",
                        "text": [
                            "The table heading element, <th>, is used to add titles to rows and columns of a table and must be enclosed in a table row element, <tr>."
                        ],
                        "code": [
                            "<table>",
                            "  <tr>",
                            "    <th>column one</th>",
                            "    <th>column two</th>",
                            "  </tr>",
                            "  <tr>",
                            "    <td>1</td>",
                            "    <td>2</td>",
                            "  </tr>",
                            "</table>"
                        ]
                    },
                    {
                        "title": "colspan Attribute",
                        "text": [
                            "The colspan attribute on a table header <th> or table data <td> element indicates how many columns that particular cell should span within the table. The colspan value is set to 1 by default and will take any positive integer between 1 and 1000."
                        ],
                        "code": [
                            "<table>",
                            "  <tr>",
                            "    <th>row 1:</th>",
                            "    <td>col 1</td>",
                            "    <td>col 2</td>",
                            "    <td>col 3</td>",
                            "  </tr>",
                            "  <tr>",
                            "    <th>row 2:</th>",
                            "    <td colspan='2'>col 1 (will span 2 columns)</td>",
                            "    <td>col 2</td>",
                            "    <td>col 3</td>",
                            "  </tr>",
                            "</table>"
                        ]
                    },
                    {
                        "title": "<tfoot> Table Footer Element",
                        "text": [
                            "The table footer element, <tfoot>, uses table rows to give footer content or to summarize content at the end of a table."
                        ],
                        "code": [
                            "<table>",
                            " <thead>",
                            "   <tr>",
                            "     <th>heading 1</th>",
                            "     <th>heading 2</th>",
                            "   </tr>",
                            " </thead>",
                            " <tbody>",
                            "   <tr>",
                            "     <td>col 1</td>",
                            "     <td>col 2</td>",
                            "   </tr>",
                            " </tbody>",
                            " <tfoot>",
                            "   <tr>",
                            "     <td>summary of col 1</td>",
                            "     <td>summary of col 2</td>",
                            "   </tr>",
                            " </tfoot>",
                            "</table>"
                        ]
                    },
                    {
                        "title": "<table> Table Element",
                        "text": [
                            "In HTML, the <table> element has content that is used to represent a two-dimensional table made of rows and columns."
                        ],
                        "code": [
                            "<table>",
                            "  <!-- rows and columns will go here -->",
                            "</table>"
                        ]
                    },
                ]
            },
            {
                "title": "Semantic HTML",
                "content": [
                    {
                        "title": "Semantic HTML",
                        "text": [
                            "Semantic HTML introduces meaning to the code we write. Before Semantic HTML the elements didn’t have any meaning as to what it does or what content goes in it. An element such as <div> was used as a general-purpose element to create things from headers to footers to articles. With Semantic HTML we were introduced to elements that tell developers and browsers exactly what it does and what content should go in it."
                        ],
                        "code": [
                            "<!--Non Semantic HTML-->",
                            "<div id='footer'>",
                            " <p>this is a footer</p>",
                            "</div>",
                            "<!--Semantic HTML-->",
                            "<footer>",
                            " <p>this is a footer</p>",
                            "</footer>"
                        ]
                    },
                    {
                        "title": "Element Placement",
                        "text": [
                            "Semantic HTML introduces elements that can tell developers exactly what the element does or where it’s placed based on the name of that element. Some of these elements are <header>, <nav>, <main>, and <footer>. <header> describes the content at the top of the page <body>. It may include a logo, navigational links or a search bar. <nav> encapsulates the page’s navigational links. It is often placed inside the <header> or <footer>. <main> encapsulates the main content of a page between the header/navigation and the footer areas. <footer> includes the page’s footer content at the bottom of the <body>."
                        ]
                    },
                    {
                        "title": "Embedding media",
                        "text": [
                            "Semantic HTML introduces us to <video>, <audio> and <embed>. <video> allows us to add videos to our website. <audio> allows us to implement audio into our website. <embed> can be used to implement any type of media. These elements are universal in that they all use the src attribute to link the source of the content. <video> and <audio> requires a closing tag while <embed> is a self-closing tag."
                        ],
                        "code": [
                            "<!--Video Tag-->",
                            "<video src='4kvideo.mp4'>video not supported</video>",
                            "<!--Audio Tag-->",
                            "<audio src='koreanhiphop.mp3'></audio>",
                            "<!--Embed tag-->",
                            "<embed src='babyyoda.gif'/>"
                        ]
                    },
                    {
                        "title": "<figure> and <figcaption>",
                        "text": [
                            "The <figure> element is used to encapsulate media such as an image, diagram. or code snippet. The <figcaption> element is used to describe the media encapsulated within the <figure> element. Developers will normally use <figcaption> within the <figure> element to group the media and description. This way, if a developer decides to change the position of the media, the description will follow along with it."
                        ],
                        "code": [
                            "<figure>",
                            " <img src='qwerty.jpg'>",
                            " <figcaption>The image shows the layout of a qwerty keyboard.</figcaption>",
                            "</figure>"
                        ]
                    },
                    {
                        "title": "<section> and <article>",
                        "text": [
                            "<section> defines elements in a document, such as chapters, headings, or any other area of the document with the same theme. <article> holds content that makes sense on its own such as articles, blogs, and comments. Generally developers will use <section> to define a theme for the webpage and use <article> to write independent content for that theme. This does not mean that <article> has to be used with <section>."
                        ],
                        "code": [
                            "<section>",
                            "  <!--defines theme-->",
                            "  <h2>Top Sports league in America</h2>",
                            "<!--writes independent content relating to that theme-->",
                            "  <article>",
                            "    <p>One of the top sports league is the nba.</p>",
                            "  </article>",
                            "</section>"
                        ]
                    },
                    {
                        "title": "<aside> Aside Element",
                        "text": [
                            "The <aside> element is used to mark additional information that can enhance another element but isn’t required in order to understand the main content. Usually, this information would be in a sidebar or a location where it doesn’t obstruct the main piece of content. An example of this would be an article that discusses how to take care of a dog and next to the article an ad would appear advertising a dog grooming product."
                        ],
                        "code": [
                            "<article>",
                            "<!--Main Content-->",
                            "</article>",
                            "<aside>",
                            "<!--Additional information-->",
                            "</aside>"
                        ]
                    },
                ]
            }

        ]
    },
    {
        "title": "Fundamentals of CSS",
        "content": [
            {
                "title": "Selectors and Visual Rules",
                "content": [
                    {
                        "title": "<link> Link Element",
                        "text": [
                            "The <link> element is used to link HTML documents to external resources like CSS files. It commonly uses:The <link> element is used to link HTML documents to external resources like CSS files. It commonly uses:",
                            [
                                "href attribute to specify the URL to the external resource",
                                "rel attribute to specify the relationship of the linked document to the current document",
                                "type attribute to define the type of content being linked"
                            ]
                        ],
                        "code": [
                            "<!-- How to link an external stylesheet with href, rel, and type attributes -->",
                            "<link href='./ path / to / stylesheet / style.css' rel='stylesheet' type='text / css'>",
                        ]
                    },
                    {
                        "title": "Purpose of CSS",
                        "text": [
                            "CSS, or Cascading Style Sheets, is a language that is used in combination with HTML that customizes how HTML elements will appear. CSS can define styles and change the layout and design of a sheet."
                        ]
                    },
                    {
                        "title": "Write CSS in Separate Files",
                        "text": [
                            "CSS code can be written in its own files to keep it separate from the HTML code. The extension for CSS files is .css. These can be linked to an HTML file using a <link> tag in the <head> section."
                        ],
                        "code": [
                            "< head > ",
                            "  <link href='style.css' type='text / css' rel='stylesheet'>",
                            "</head>"
                        ]
                    },
                    {
                        "title": "Write CSS in HTML File",
                        "text": [
                            "CSS code can be written in an HTML file by enclosing the code in <style> tags. Code surrounded by <style> tags will be interpreted as CSS syntax."
                        ],
                        "code": [
                            "<head>",
                            "  <style>",
                            "    h1 {",
                            "      color: blue;",
                            "    }",
                            "  </style>",
                            "</head>"
                        ]
                    },
                    {
                        "title": "Inline Styles",
                        "text": [
                            "CSS styles can be directly added to HTML elements by using the style attribute in the element’s opening tag. Each style declaration is ended with a semicolon. Styles added in this manner are known as inline styles."
                        ],
                        "code": [
                            "<h2 style='text-align: center;'>Centered text</h2>",
                            "<p style='color: blue; font-size: 18px;'>Blue, 18-point text</p>"
                        ]
                    },
                    {
                        "title": "Separating HTML code from CSS code",
                        "text": [
                            "It is common practice to separate content code in HTML files from styling code in CSS files. This can help make the code easier to maintain, by keeping the syntax for each file separate, and any changes to the content or styling can be made in their respective files."
                        ]
                    },
                    {
                        "title": "Class and ID Selectors",
                        "text": [
                            "CSS classes can be reusable and applied to many elements. Class selectors are denoted with a period . followed by the class name. CSS ID selectors should be unique and used to style only a single element. ID selectors are denoted with a hash sign # followed by the id name."
                        ],
                        "code": [
                            "/* Selects all elements with class='column' */",
                            ".column {",
                            "}",
                            "/* Selects element with id='first-item' */",
                            "#first-item {",
                            "}"
                        ]
                    },
                    {
                        "title": "Groups of CSS Selectors",
                        "text": [
                            "Match multiple selectors to the same CSS rule, using a comma-separated list. In this example, the text for both h1 and h2 is set to red."
                        ],
                        "code": [
                            "h1, h2 {",
                            "  color: red;",
                            "}"
                        ]
                    },
                    {
                        "title": "Selector Chaining",
                        "text": [
                            "CSS selectors define the set of elements to which a CSS rule set applies. For instance, to select all <p> elements, the p selector can be used to create style rules."
                        ],
                    },
                    {
                        "title": "Chaining Selectors",
                        "text": [
                            "CSS selectors can be chained so that rule sets apply only to elements that match all criteria. For instance, to select <h3> elements that also have the section-heading class, the selector h3.section-heading can be used."
                        ],
                        "code": [
                            "/* Select h3 elements with the section-heading class */",
                            "h3.section-heading {",
                            "  color: blue;",
                            "}",
                            "/* Select elements with the section-heading and button class */",
                            ".section-heading.button {",
                            "  cursor: pointer;",
                            "}"
                        ]
                    },
                    {
                        "title": "CSS Type Selectors",
                        "text": [
                            "CSS type selectors are used to match all elements of a given type or tag name. Unlike for HTML syntax, we do not include the angle brackets when using type selectors for tag names. When using type selectors, elements are matched regardless of their nesting level in the HTML."
                        ],
                        "code": [
                            "/* Selects all <p> tags */",
                            "p {",
                            "}"
                        ]
                    },
                    {
                        "title": "CSS class selectors",
                        "text": [
                            "The CSS class selector matches elements based on the contents of their class attribute. For selecting elements having calendar-cell as the value of the class attribute, a . needs to be prepended."
                        ],
                        "code": [
                            ".calendar-cell {",
                            "  color: #fff;",
                            "}"
                        ]
                    },
                    {
                        "title": "HTML attributes with multiple values",
                        "text": [
                            "Some HTML attributes can have multiple attribute values. Multiple attribute values are separated by a space between each attribute."
                        ],
                        "code": [
                            "<div class='value1 value2 value3'></div>"
                        ]
                    },
                    {
                        "title": "Selector Specificity",
                        "text": [
                            "Specificity is a ranking system that is used when there are multiple conflicting property values that point to the same element. When determining which rule to apply, the selector with the highest specificity wins out. The most specific selector type is the ID selector, followed by class selectors, followed by type selectors. In this example, only color: blue will be implemented as it has an ID selector whereas color: red has a type selector."
                        ],
                        "code": [
                            "h1#header {",
                            "  color: blue;",
                            "} /* implemented */",
                            "h1 {",
                            "  color: red;",
                            "} /* Not implemented */"
                        ]
                    },
                    {
                        "title": "CSS ID selectors",
                        "text": [
                            "The CSS ID selector matches elements based on the contents of their id attribute. The values of id attribute should be unique in the entire DOM. For selecting the element having job-title as the value of the id attribute, a # needs to be prepended."
                        ],
                        "code": [
                            "#job-title {",
                            "  font-weight: bold;  font-weight: bold;",
                            "}"
                        ]
                    },
                    {
                        "title": "CSS descendant selector",
                        "text": [
                            "The CSS descendant selector combinator is used to match elements that are descended from another matched selector. They are denoted by a single space between each selector and the descended selector. All matching elements are selected regardless of the nesting level in the HTML."
                        ],
                        "code": [
                            "div p { }",
                            "section ol li { }"
                        ]
                    },
                    {
                        "title": "CSS declarations",
                        "text": [
                            "In CSS, a declaration is the key-value pair of a CSS property and its value. CSS declarations are used to set style properties and construct rules to apply to individual or groups of elements. The property name and value are separated by a colon, and the entire declaration must be terminated by a semi-colon.In CSS, a declaration is the key-value pair of a CSS property and its value. CSS declarations are used to set style properties and construct rules to apply to individual or groups of elements. The property name and value are separated by a colon, and the entire declaration must be terminated by a semi-colon."
                        ],
                        "code": [
                            "/* ",
                            "CSS declaration format:",
                            "property-name: value;",
                            "*/",
                            "/* CSS declarations *//* CSS declarations */",
                            "text-align: center;",
                            "color: purple;",
                            "width: 100px;"
                        ]
                    },
                    {
                        "title": "Font Size",
                        "text": [
                            "The font-size CSS property is used to set text sizes. Font size values can be many different units or types such as pixels."
                        ],
                        "code": [
                            "font-size: 30px;"
                        ]
                    },
                    {
                        "title": "Font Size",
                        "text": [
                            "The font-size CSS property is used to set text sizes. Font size values can be many different units or types such as pixels."
                        ],
                        "code": [
                            "font-size: 30px;"
                        ]
                    },
                    {
                        "title": "Background Color",
                        "text": [
                            "The background-color CSS property controls the background color of elements."
                        ],
                        "code": [
                            "background-color: blue;"
                        ]
                    },
                    {
                        "title": "!important Rule",
                        "text": [
                            "The CSS !important rule is used on declarations to override any other declarations for a property and ignore selector specificity. !important rules will ensure that a specific declaration always applies to the matched elements. However, generally it is good to avoid using !important as bad practice."
                        ],
                        "code": [
                            "#column-one {",
                            "  width: 200px !important;",
                            "}",
                            ".post-title {",
                            "  color: blue !important;",
                            "}"
                        ]
                    },
                    {
                        "title": "Opacity",
                        "text": [
                            "The opacity CSS property can be used to control the transparency of an element. The value of this property ranges from 0 (transparent) to 1 (opaque)."
                        ],
                        "code": [
                            "opacity: 0.5;"
                        ]
                    },
                    {
                        "title": "Font Weight",
                        "text": [
                            "The font-weight CSS property can be used to set the weight (boldness) of text. The provided value can be a keyword such as bold or normal."
                        ],
                        "code": [
                            "font-weight: bold;"
                        ]
                    },
                    {
                        "title": "Text Align",
                        "text": [
                            "The text-align CSS property can be used to set the text alignment of inline contents. This property can be set to these values: left, right, or center."
                        ],
                        "code": [
                            "text-align: right;"
                        ]
                    },
                    {
                        "title": "CSS Rule Sets",
                        "text": [
                            "A CSS rule set contains one or more selectors and one or more declarations. The selector(s), which in this example is h1, points to an HTML element. The declaration(s), which in this example are color: blue and text-align: center style the element with a property and value. The rule set is the main building block of a CSS sheet."
                        ],
                        "code": [
                            "h1 {",
                            "  color: blue;",
                            "  text-align: center;",
                            "}"
                        ]
                    },
                    {
                        "title": "Setting foreground text color in CSS",
                        "text": [
                            "Using the color property, foreground text color of an element can be set in CSS. The value can be a valid color name supported in CSS like green or blue. Also, 3 digit or 6 digit color code like #22f or #2a2aff can be used to set the color."
                        ],
                        "code": [
                            "p {",
                            "  color : #2a2aff ;",
                            "}",
                            "span {",
                            "  color : green ;",
                            "}"
                        ]
                    },
                    {
                        "title": "Resource URLs",
                        "text": [
                            "In CSS, the url() function is used to wrap resource URLs. These can be applied to several properties such as the background-image."
                        ],
                        "code": [
                            "background-image: url('../resources/image.png');",
                        ]
                    },
                    {
                        "title": "Background Image",
                        "text": [
                            "The background-image CSS property sets the background image of an element. An image URL should be provided in the syntax url('moon.jpg') as the value of the property."
                        ],
                        "code": [
                            "background-image: url('nyan-cat.gif');",
                        ]
                    },
                    {
                        "title": "Font Family",
                        "text": [
                            "The font-family CSS property is used to specify the typeface in a rule set. Fonts must be available to the browser to display correctly, either on the computer or linked as a web font. If a font value is not available, browsers will display their default font. When using a multi-word font name, it is best practice to wrap them in quotes."
                        ],
                        "code": [
                            "h2 {",
                            "  font-family: Verdana;",
                            "}",
                            "#page-title {",
                            "  font-family: 'Courier New';",
                            "}"
                        ]
                    },
                    {
                        "title": "Color Name Keywords",
                        "text": [
                            "Color name keywords can be used to set color property values for elements in CSS."
                        ],
                        "code": [
                            "h1 {",
                            "  color: aqua;",
                            "}",
                            "li {",
                            "  color: khaki;",
                            "}"
                        ]
                    }
                ]
            },
            {
                "title": "The Box Model",
                "content": [
                    {
                        "title": "CSS Margin Collapse",
                        "text": [
                            "CSS margin collapse occurs when the top and bottom margins of blocks are combined into a single margin equal to the largest individual block margin.",
                            "Margin collapse only occurs with vertical margins, not for horizontal margins."
                        ],
                        "code": [
                            "/* The vertical margins will collapse to 30 pixels",
                            "instead of adding to 50 pixels. */",
                            ".block-one {",
                            "  margin: 20px;",
                            "}",
                            ".block-two {",
                            "  margin: 30px;",
                            "}"
                        ]
                    },
                    {
                        "title": "CSS auto keyword",
                        "text": [
                            "The value auto can be used with the property margin to horizontally center an element within its container. The margin property will take the width of the element and will split the rest of the space equally between the left and right margins."
                        ],
                        "code": [
                            "div {",
                            "  margin: auto;",
                            "}"
                        ]
                    },
                    {
                        "title": "Dealing with overflow",
                        "text": [
                            "If content is too large for its container, the CSS overflow property will determine how the browser handles the problem.",
                            "By default, it will be set to visible and the content will take up extra space. It can also be set to hidden, or to scroll, which will make the overflowing content accessible via scroll bars within the original container."
                        ],
                        "code": [
                            "small-block {",
                            "  overflow: scroll;",
                            "}"
                        ]
                    },
                    {
                        "title": "Height and Width Maximums/Minimums",
                        "text": [
                            "The CSS min-width and min-height properties can be used to set a minimum width and minimum height of an element’s box. CSS max-width and max-height properties can be used to set maximum widths and heights for element boxes."
                        ],
                        "code": [
                            "/* Any element with class 'column' will be at most 200 pixels wide, despite the width property value of 500 pixels. */",
                            ".column {",
                            "  max-width: 200px;",
                            "  width: 500px;",
                            "}"
                        ]
                    },
                    {
                        "title": "The visibility Property",
                        "text": [
                            "The CSS visibility property is used to render hidden objects invisible to the user, without removing them from the page. This ensures that the page structure and organization remain unchanged."
                        ],
                        "code": [
                            ".invisible-elements {",
                            "  visibility: hidden;",
                            "}"
                        ]
                    },
                    {
                        "title": "The property box-sizing of CSS box model",
                        "text": [
                            "The CSS box model is a box that wraps around an HTML element and controls the design and layout. The property box-sizing controls which aspect of the box is determined by the height and width properties. The default value of this property is content-box, which renders the actual size of the element including the content box; but not the paddings and borders. The value border-box, on the other hand, renders the actual size of an element including the content box, paddings, and borders."
                        ],
                        "code": [
                            ".container {",
                            "  box-sizing: border-box;",
                            "}"
                        ]
                    },
                    {
                        "title": "CSS box-sizing: border-box",
                        "text": [
                            "The value border-box of the box-sizing property for an element corresponds directly to the element’s total rendered size, including padding and border with the height and width properties.",
                            "The default value of the box-sizing property is content-box. The value border-box is recommended when it is necessary to resize the padding and border but not just the content. For instance, the value border-box calculates an element’s height as follows: height = content height + padding + border."
                        ],
                        "code": [
                            "#box-example {",
                            "  box-sizing: border-box;",
                            "}"
                        ]
                    },
                ]
            },
            {
                "title": "Display and positioning",
                "content": [
                    {
                        "title": "CSS z-index property",
                        "text": [
                            "The CSS z-index property specifies how far back or how far forward an element will appear on a web page when it overlaps other elements.",
                            "The z-index property uses integer values, which can be positive or negative values. The element with the highest z-index value will be at the foreground, while the element with the lowest z-index value will be at the back."
                        ],
                        "code": [
                            "//`element1` will overlap `element2`",
                            ".element1 {",
                            "  position: absolute;",
                            "  z-index: 1;",
                            "}",
                            ".element2 {",
                            "  position: absolute;",
                            "  z-index: -1;",
                            "}"
                        ]
                    },
                    {
                        "title": "Fixed CSS Positioning",
                        "text": [
                            "Positioning in CSS provides designers and developers options for positioning HTML elements on a web page. The CSS position can be set to static, relative, absolute or fixed. When the CSS position has a value of fixed, it is set/pinned to a specific spot on a page. The fixed element stays the same regardless of scrolling. The navigation bar is a great example of an element that is often set to position: fixed;, enabling the user to scroll through the web page and still access the navigation bar."
                        ],
                        "code": [
                            "#navbar {",
                            "  position: fixed;",
                            "}"
                        ]
                    },
                    {
                        "title": "CSS display property",
                        "text": [
                            "The CSS display property determines the type of render block for an element. The most common values for this property are block, inline, and inline-block.",
                            "Block-level elements take up the full width of their container with line breaks before and after, and can have their height and width manually adjusted.",
                            "Inline elements take up as little space as possible, flow horizontally, and cannot have their width or height manually adjusted.",
                            "Inline-block elements can appear next to each other, and can have their width and height manually adjusted."
                        ],
                        "code": [
                            ".container1 {",
                            "  display: block;",
                            "}",
                            ".container2 {",
                            "  display: inline;",
                            "}",
                            ".container3 {",
                            "  display: inline-block;",
                            "}"
                        ]
                    },
                    {
                        "title": "CSS position: absolute",
                        "text": [
                            "The value absolute for the CSS property position enables an element to ignore sibling elements and instead be positioned relative to its closest parent element that is positioned with relative or absolute. The absolute value removes an element entirely from the document flow. By using the positioning attributes top, left, bottom and right, an element can be positioned anywhere as expected."
                        ],
                        "code": [
                            ".element {",
                            "  position: absolute;",
                            "}"
                        ]
                    },
                    {
                        "title": "CSS position: relative",
                        "text": [
                            "The value relative of the CSS position property enables an element to be positioned relative to where it would have originally been on a web page. The offset properties can be used to determine the actual position of the element relative to its original position. Without the offset properties, this declaration will have no effect on its positioning, it will act as the default value static of the position property."
                        ],
                        "code": [
                            ".element {",
                            "  position: relative;",
                            "}"
                        ]
                    },
                    {
                        "title": "CSS float property",
                        "text": [
                            "The CSS float property determines how far left or how far right an element should float within its parent element. The value left floats an element to the left side of its container and the value right floats an element to the right side of its container. For the property float, the width of the container must be specified or the element will assume the full width of its containing element."
                        ],
                        "code": [
                            ".left {",
                            "  float: left;",
                            "}",
                            ".right {",
                            "  float: right;",
                            "}"
                        ]
                    },
                    {
                        "title": "The CSS clear property",
                        "text": [
                            "The CSS clear property specifies how an element should behave when it bumps into another element within the same containing element.The clear is usually used in combination with elements having the CSS float property. This determines on which sides floating elements are allowed to float."
                        ],
                        "code": [
                            "/*This determines that no other elements within the same containing element are allowed to float on the left side of this element.*/",
                            ".element {",
                            "  clear: left;",
                            "}",
                            "/*This determines that no other elements within the same containing element are allowed to float on the right side of this element.*/",
                            ".element {",
                            "  clear: right;",
                            "}",
                            "/*This determines that no elements within the same containing element are allowed to float on either side of this element.*//*This determines that no elements within the same containing element are allowed to float on either side of this element.*/",
                            ".element {",
                            "  clear: both;",
                            "}",
                            "/*This determines that other elements within the same containing element are allowed to float on both side of this element.*/",
                            ".element {",
                            "  clear: none;",
                            "}",
                        ]
                    },
                ]
            }

        ]
    },
    {
        "title": "Deploying Websites",
        "content": [
            {
                "title": "Command line for building websites",
                "content": [
                    {
                        "title": "pwd Print Working Directory",
                        "text": [
                            "The shell command pwd displays the file path from the root directory to the current working directory."
                        ],
                        "code": [
                            "$ pwd",
                            "/Users/sonny/Downloads"
                        ]
                    },
                    {
                        "title": "mkdir Make Directory",
                        "text": [
                            "The shell command mkdir is used to make a new directory in the filesystem according to its argument. If a file path is given, the new directory will be placed at the end. Otherwise, it will create a new directory in the current working directory."
                        ],
                        "code": [
                            "$ mkdir new-directory",
                            "$ ls ",
                            "old-directory    new-directory"
                        ]
                    },
                    {
                        "title": "ls List",
                        "text": [
                            "The shell command ls is used to list the contents of a directory. If no arguments are given, it will list the contents of the current working directory."
                        ],
                        "code": [
                            "$ ls Desktop",
                            "resume.pdf",
                            "photo.png"
                        ]
                    },
                    {
                        "title": "cd Change Directory",
                        "text": [
                            "The shell command cd is used to move throughout the filesystem of a computer. It accepts a variety of arguments:",
                            [
                                "Full file paths.",
                                "Names of children of the current directory.",
                                ".. the parent of the current directory."
                            ]
                        ],
                        "code": [
                            "$ cd some-directory",
                            "$ cd ..",
                        ]
                    },
                    {
                        "title": "Filesystem Structure",
                        "text": [
                            "A computer’s filesystem organizes the data stored by a computer, so that it can be easily retrieved by the user.",
                            "Files are generally represented in a tree-like structure, in which any parent directory can have any number of children. The root directory is then found at the base of the tree."
                        ]
                    },
                    {
                        "title": "touch Create New File",
                        "text": [
                            "The shell command touch creates a new file in the current working directory with the name provided."
                        ],
                        "code": [
                            "$ touch grocery-list.txt"
                        ]
                    },
                    {
                        "title": "The Command Line",
                        "text": [
                            "The command line allows a user to navigate the filesystem and run built-in programs or custom scripts. In Unix, the command line interface is called Bash, and the shell prompt is the $."
                        ],
                        "code": [
                            "$"
                        ]
                    },
                    {
                        "title": "Helper Commands",
                        "text": [
                            "Helper commands for the command line include:",
                            [
                                "clear to clear the terminal",
                                "tab to autocomplete the line",
                                "↑ and ↓ to cycle through previous commands"
                            ]
                        ]
                    }
                ]
            }
        ]
    },
    {
        "title": "improved styling with css",
        "content": [
            {
                "title": "Colors",
                "content": [
                    {
                        "title": "Color Name Keywords",
                        "text": [
                            "Color name keywords can be used to set color property values for elements in CSS."
                        ],
                        "code": [
                            "h1 {",
                            "  color: aqua;",
                            "}",
                            "li {",
                            "  color: khaki;",
                            "}"
                        ]
                    },
                    {
                        "title": "CSS Color Alpha Values",
                        "text": [
                            "Alpha values determine the transparency of colors in CSS. Alpha values can be set for both RGB and HSL colors by using rgba() and hsla() and providing a fourth value representing alpha. Alpha values can range between 0.0 (totally transparent) and 1.0 (totally opaque).",
                            "The CSS transparent value can also be used to create a fully transparent element."
                        ],
                        "code": [
                            ".midground {",
                            "  background-color: rgba(0, 255, 0, 0.5);",
                            "}",
                            ".foreground {",
                            "  background-color: hsla(34, 100%, 50%, 0.1);",
                            "}",
                            ".transparent {",
                            "  color: transparent;",
                            "}"
                        ]
                    },
                    {
                        "title": "CSS Hexadecimal Colors",
                        "text": [
                            "CSS colors can be represented in hexadecimal (or hex) notation. Hexadecimal digits can represent sixteen different values using 0-9 and a-f.",
                            "Hexadecimal colors are composed of 6 characters–each group of two represents a value between 0 and 255 for red, green, or blue. For example #ff0000 is all red, no green, and no blue.",
                            "When both characters of all three colors are repeated, hex colors can be abbreviated to only three values, so #0000ff could also be represented as #00f."
                        ],
                        "code": [
                            ".red {",
                            "  color: #ff0000;",
                            "}",
                            ".short-blue {",
                            "  color: #00f;",
                            "}"
                        ]
                    },
                    {
                        "title": "CSS HSL Colors",
                        "text": [
                            "CSS colors can be declared with the HSL color system using hsl() syntax. This syntax contains three values: hue (the color value itself), saturation (intensity), and lightness.",
                            "Hue values range from 0 to 360 while saturation and lightness values are represented as percentages."
                        ],
                        "code": [
                            ".light-blue {",
                            "  background-color: hsl(200, 70%, 50%);",
                            "}"
                        ]
                    },
                    {
                        "title": "CSS rgb() Colors",
                        "text": [
                            "CSS colors can be declared with RGB colors using rgb() syntax.",
                            "rgb() should be supplied with three values representing red, green, and blue. These values range can from 0 to 255."
                        ],
                        "code": [
                            ".hot-pink {",
                            "  color: rgb(249, 2, 171);",
                            "}",
                            ".green {",
                            "  color: rgb(0, 255, 0);",
                            "}"
                        ]
                    }
                ]
            },
            {
                "title": "Typography",
                "content": [
                    {
                        "title": "CSS font-weight Property",
                        "text": [
                            "The CSS font-weight property declares how thick or thin should be the characters of a text. Numerical values can be used with this property to set the thickness of the text. The numeric scale range of this property is from 100 to 900 and accepts only multiples of 100. The default value is normal while the default numerical value is 400. Any value less than 400 will have text appear lighter than the default while any numerical value greater than the 400 will appear bolder.",
                            "In the given example, all the <p> elements will appear in a bolder font."
                        ],
                        "code": [
                            "/* Sets the text as bolder. */",
                            "p {",
                            "  font-weight: 700;",
                            "}"
                        ]
                    },
                    {
                        "title": "CSS font-style property",
                        "text": [
                            "The CSS font-style property determines the font style in which text will appear.",
                            "It accepts italic as a value to set the font style to italic."
                        ],
                        "code": [
                            ".text {",
                            "  font-style: italic;",
                            "}"
                        ]
                    },
                    {
                        "title": "CSS @font-face rule",
                        "text": [
                            "The CSS @font-face rule allows external fonts or font files to be imported directly into stylesheets.The location of the font file must be specified in the CSS rule so that the files can be loaded from that location. This rule also allows locally hosted fonts to be added using a relative file path instead of a web URL."
                        ],
                        "code": [
                            "@font-face {",
                            "  font-family: 'Glegoo';",
                            "  src: url('../fonts/Glegoo-Regular.ttf') format('truetype');",
                            "}"
                        ]
                    },
                    {
                        "title": "CSS Fallback Fonts",
                        "text": [
                            "The CSS font-family property can have multiple fonts declared in order of preference. In this case the fonts following the initial font are known as the fallback fonts.",
                            "If the initial value of the property font-family fails to load to the webpage, the fallback fonts will be used."
                        ],
                        "code": [
                            "/* Here `Arial` is the fallback font for <p> tags */",
                            "p {",
                            "  font-family: 'Helvetica", "Arial';",
                            "}"
                        ]
                    },
                    {
                        "title": "The CSS line-height property",
                        "text": [
                            "The CSS line-height property declares the vertical spacing between lines of text. It accepts both unitless numbers as a ratio (eg. 2) and numbers specified by unit as values (eg. 12px) but it does not accept negative numbers. A unitless number is an absolute value that will compute the line height as a ratio to the font size and a unit number can be any valid CSS unit (eg. pixels, percents, ems, rems, etc.). To set the line-height of the <p> elements to 10px, the given CSS declaration can be used."
                        ],
                        "code": [
                            "p {",
                            "line-height: 10px;",
                            "}"
                        ]
                    },
                    {
                        "title": "CSS Linking fonts",
                        "text": [
                            "Linking fonts allow user to use web fonts in the document. They can be imported in an HTML document by using the <link> tag. Once the web font URL is placed within the href attribute, the imported font can then be used in CSS declaration."
                        ],
                        "code": [
                            "<head>",
                            "  <link href='https://fonts.googleapis.com/css?family=Droid%20Serif' rel='stylesheet'>",
                            "</head>"
                        ]
                    }
                ]
            },
            {
                "title": "Links and Buttons",
                "content": [
                    {
                        "title": "Signifiers",
                        "text": [
                            "In the field of user interface design, signifiers are indicators that offer clues about how to interact with new objects or situations."
                        ]
                    },
                    {
                        "title": "The User Agent Stylesheet",
                        "text": [
                            "The user agent stylesheet is a set of default styles included in the browser for use on all web pages."
                        ]
                    },
                    {
                        "title": "Links and Button Behavior",
                        "text": [
                            "Links and buttons should exhibit the same behavior across different browsers to consistently maintain the same experience for all users."
                        ]
                    },
                    {
                        "title": "Link States",
                        "text": [
                            "In a browser, links have four main states:",
                            [
                                "Normal (not clicked)",
                                "Hover",
                                "Active (clicked)",
                                "Visited"
                            ]
                        ]
                    },
                    {
                        "title": "Link Styles",
                        "text": [
                            "Links should be styled in a different way from their surrounding text.",
                            "By default, links appear blue and underlined in contrast to the surrounding black text."
                        ]
                    },
                    {
                        "title": "Anchor Text",
                        "text": [
                            "Anchor text is the text inside of a link and is descriptive of the linked resource.",
                            "It improves:",
                            [
                                "Usability",
                                "Accessibility",
                                "Search engine optimization"
                            ]
                        ]
                    },
                    {
                        "title": "The ‘title’ Attribute",
                        "text": [
                            "The title attribute can be provided to any HTML element.",
                            "This attribute is used for additional context or advisory text for clickable elements."
                        ]
                    },
                    {
                        "title": "Tooltips",
                        "text": [
                            "A tooltip is a descriptive box which contains the text of an element’s title attribute and appears near the user’s cursor."
                        ]
                    },
                    {
                        "title": "The :hover CSS Pseudo-Class",
                        "text": [
                            "The CSS pseudo-class :hover is used to style an element when the mouse cursor hovers over it."
                        ]
                    },
                    {
                        "title": "The CSS cursor Property",
                        "text": [
                            "The CSS cursor property is used to change the appearance of the mouse cursor when hovering over an element."
                        ]
                    },
                    {
                        "title": "Skeuomorphism",
                        "text": [
                            "Skeuomorphism is the concept of replicating or imitating real-life counterparts with UI elements."
                        ]
                    },
                    {
                        "title": "Flat Design",
                        "text": [
                            "Flat design uses simplicity and lack of clutter for its UI elements."
                        ]
                    },
                    {
                        "title": "Button Skeuomorphic Styling",
                        "text": [
                            "A <button> element can incorporate skeuomorphic styling for a realistic 3D appearance.",
                            "When pressing the button, a texture change may occur to make the button appear to flatten and pop back up when released."
                        ]
                    },
                    {
                        "title": "Button Flat Styling",
                        "text": [
                            "A <button> element can incorporate flat styling for a simple 2D effect.",
                            "When pressing the button, a color change may occur as a signifier that the button has been pressed."
                        ]
                    },
                    {
                        "title": "Button Hover State",
                        "text": [
                            "A button can have a hover state that changes the appearance of a cursor when it is directly over the button."
                        ]
                    },
                    {
                        "title": "Mobile Device Hover State",
                        "text": [
                            "The hover state of buttons and links do not apply to mobile devices due to the lack of a cursor."
                        ]
                    },
                ]
            }
        ]
    },
    {
        "title": "JavaScript syntax, Part 1",
        "content": [
            {
                "title": "Introduction",
                "content": [
                    {
                        "title": "console.log()",
                        "text": [
                            "The console.log() method is used to log or print messages to the console. It can also be used to print objects and other info."
                        ],
                        "code": [
                            "console.log('Hi there!');",
                            "// Prints: Hi there!"
                        ]
                    },
                    {
                        "title": "JavaScript",
                        "text": [
                            "JavaScript is a programming language that powers the dynamic behavior on most websites. Alongside HTML and CSS, it is a core technology that makes the web run."
                        ]
                    },
                    {
                        "title": "Methods",
                        "text": [
                            "Methods return information about an object, and are called by appending an instance with a period ., the method name, and parentheses."
                        ],
                        "code": [
                            "// Returns a number between 0 and 1",
                            "Math.random();"
                        ]
                    },
                    {
                        "title": "Built-in Objects",
                        "text": [
                            "Built-in objects contain methods that can be called by appending the object name with a period ., the method name, and a set of parentheses."
                        ],
                        "code": [
                            "Math.random();",
                            "// ☝️ Math is the built-in object"
                        ]
                    },
                    {
                        "title": "Numbers",
                        "text": [
                            "Numbers are a primitive data type. They include the set of all integers and floating point numbers."
                        ],
                        "code": [
                            "let amount = 6;let amount = 6;",
                            "let price = 4.99;"
                        ]
                    },
                    {
                        "title": "String .length",
                        "text": [
                            "The .length property of a string returns the number of characters that make up the string."
                        ],
                        "code": [
                            "let message = 'good nite';",
                            "console.log(message.length);",
                            "// Prints: 9",
                            "console.log('howdy'.length);",
                            "// Prints: 5"
                        ]
                    },
                    {
                        "title": "Data Instances",
                        "text": [
                            "When a new piece of data is introduced into a JavaScript program, the program keeps track of it in an instance of that data type. An instance is an individual case of a data type."
                        ]
                    },
                    {
                        "title": "Booleans",
                        "text": [
                            "Booleans are a primitive data type. They can be either true or false."
                        ],
                        "code": [
                            "let lateToWork = true;"
                        ]
                    },
                    {
                        "title": "Math.random()",
                        "text": [
                            "The Math.random() method returns a floating-point, random number in the range from 0 (inclusive) up to but not including 1."
                        ],
                        "code": [
                            "console.log(Math.random()); ",
                            "// Prints: 0 - 0.9999999999999999"
                        ]
                    },
                    {
                        "title": "Math.floor()",
                        "text": [
                            "The Math.floor() function returns the largest integer less than or equal to the given number."
                        ],
                        "code": [
                            "console.log(Math.floor(5.95)); ",
                            "// Prints: 5"
                        ]
                    },
                    {
                        "title": "Single Line Comments",
                        "text": [
                            "In JavaScript, single-line comments are created with two consecutive forward slashes //."
                        ],
                        "code": [
                            "// This line will denote a comment"
                        ]
                    },
                    {
                        "title": "Null",
                        "text": [
                            "Null is a primitive data type. It represents the intentional absence of value. In code, it is represented as null."
                        ],
                        "code": [
                            "let x = null; "
                        ]
                    },
                    {
                        "title": "Strings",
                        "text": [
                            "Strings are a primitive data type. They are any grouping of characters (letters, spaces, numbers, or symbols) surrounded by single quotes. ' or double quotes "
                        ],
                        "code": [
                            "let single = 'Wheres my bandit hat?';",
                            "let double = 'Wheres my bandit hat ?';"
                        ]
                    },
                    {
                        "title": "Arithmetic Operators",
                        "text": [
                            "JavaScript supports arithmetic operators for:",
                            [
                                "+ addition",
                                "- subtraction",
                                "* multiplication",
                                "/ division",
                                "% modulo"
                            ]
                        ],
                        "code": [
                            "// Addition",
                            "5 + 5",
                            "// Subtraction",
                            "10 - 5",
                            "// Multiplication",
                            "5 * 10",
                            "// Division",
                            "10 / 5",
                            "// Modulo",
                            "10 % 5"
                        ]
                    },
                    {
                        "title": "Multi-line Comments",
                        "text": [
                            "In JavaScript, multi-line comments are created by surrounding the lines with /* at the beginning and */ at the end. Comments are good ways for a variety of reasons like explaining a code block or indicating some hints, etc."
                        ],
                        "code": [
                            "/*  ",
                            "The below configuration must be",
                            "changed before deployment.changed before deployment.",
                            "*/",
                            "let baseUrl = 'localhost/taxwebapp/country';",
                        ]
                    },
                    {
                        "title": "Remainder / Modulo Operator",
                        "text": [
                            "The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can."
                        ],
                        "code": [
                            "// calculates # of weeks in a year, rounds down to nearest integer",
                            "const weeksInYear = Math.floor(365/7);",
                            "// calcuates the number of days left over after 365 is divded by 7",
                            "const daysLeftOver = 365 % 7 ;",
                            "console.log('A year has ' + weeksInYear + ' weeks and ' + daysLeftOver + ' days');",
                        ]
                    },
                    {
                        "title": "Assignment Operators",
                        "text": [
                            "An assignment operator assigns a value to its left operand based on the value of its right operand. Here are some of them:",
                            [
                                "+= addition assignment",
                                "-= subtraction assignment",
                                "*= multiplication assignment",
                                "/= division assignment"
                            ]
                        ],
                        "code": [
                            "let number = 100;",
                            "// Both statements will add 10",
                            "number = number + 10;",
                            "number += 10;",
                            "console.log(number); ",
                            "// Prints: 120"
                        ]
                    },
                    {
                        "title": "String Interpolation",
                        "text": [
                            "String interpolation is the process of evaluating string literals containing one or more placeholders (expressions, variables, etc).",
                            "It can be performed using template literals: text ${expression} text."
                        ],
                        "code": [
                            "let age = 7;",
                            "// String concatenation",
                            "'Tommy is ' + age + ' years old.';",
                            "// String interpolation",
                            "`Tommy is ${age} years old.`;"
                        ]
                    },
                    {
                        "title": "Variables",
                        "text": [
                            "Variables are used whenever there’s a need to store a piece of data. A variable contains data that can be used in the program elsewhere. Using variables also ensures code re-usability since it can be used to replace the same value in multiple places."
                        ],
                        "code": [
                            "const currency = '$';",
                            "let userIncome = 85000; ",
                            "console.log(currency + userIncome + ' is more than the average income.');",
                            "// Prints: $85000 is more than the average income.",
                        ]
                    },
                    {
                        "title": "Undefined",
                        "text": [
                            "undefined is a primitive JavaScript value that represents lack of defined value. Variables that are declared but not initialized to a value will have the value undefined."
                        ],
                        "code": [
                            "var a;",
                            "console.log(a); ",
                            "// Prints: undefined",
                        ]
                    },
                    {
                        "title": "Learn Javascript: Variables",
                        "text": [
                            "A variable is a container for data that is stored in computer memory. It is referenced by a descriptive name that a programmer can call to assign a specific value and retrieve it."
                        ],
                        "code": [
                            "// Examples of variables",
                            "let name = 'Tammy';",
                            "const found = false;",
                            "var age = 3;",
                            "console.log(name, found, age);",
                            "// Prints: Tammy false 3"
                        ]
                    },
                    {
                        "title": "Declaring Variables",
                        "text": [
                            "To declare a variable in JavaScript, any of these three keywords can be used along with a variable name:",
                            [
                                "var is used in pre-ES6 versions of JavaScript.",
                                "let is the preferred way to declare a variable when it can be reassigned.",
                                "const is the preferred way to declare a variable with a constant value."
                            ]
                        ],
                        "code": [
                            "var age;",
                            "let weight;",
                            "const numberOfFingers = 20;"
                        ]
                    },
                    {
                        "title": "Template Literals",
                        "text": [
                            "Template literals are strings that allow embedded expressions, ${expression}. While regular strings use single '' or double ' quotes, template literals use backticks instead."
                        ],
                        "code": [
                            "let name = 'Codecademy';",
                            "console.log(`Hello, ${name}`); ",
                            "// Prints: Hello, Codecademy",
                            "console.log(`Billy is ${6+8} years old.`);",
                            "// Prints: Billy is 14 years old."
                        ]
                    },
                    {
                        "title": "let Keyword",
                        "text": [
                            "let creates a local variable in JavaScript & can be re-assigned. Initialization during the declaration of a let variable is optional. A let variable will contain undefined if nothing is assigned to it."
                        ],
                        "code": [
                            "let count;",
                            "console.log(count); // Prints: undefined",
                            "count = 10;",
                            "console.log(count); // Prints: 10"
                        ]
                    },
                    {
                        "title": "const Keyword",
                        "text": [
                            "A constant variable can be declared using the keyword const. It must have an assignment. Any attempt of re-assigning a const variable will result in JavaScript runtime error."
                        ],
                        "code": [
                            "const numberOfColumns = 4;",
                            "numberOfColumns = 8;",
                            "// TypeError: Assignment to constant variable."
                        ]
                    },
                    {
                        "title": "String Concatenation",
                        "text": [
                            "In JavaScript, multiple strings can be concatenated together using the + operator. In the example, multiple strings and variables containing string values have been concatenated. After execution of the code block, the displayText variable will contain the concatenated string."
                        ],
                        "code": [
                            "let service = 'credit card';",
                            "let month = 'May 30th';",
                            "let displayText = 'Your ' + service  + ' bill is due on ' +  month + '.';",
                            "console.log(displayText);",
                            "// Prints: Your credit card bill is due on May 30th."
                        ]
                    }
                ]
            },
            {
                "title": "Conditionals",
                "content": [
                    {
                        "title": "Control Flow",
                        "text": [
                            "Control flow is the order in which statements are executed in a program. The default control flow is for statements to be read and executed in order from left-to-right, top-to-bottom in a program file.",
                            "Control structures such as conditionals (if statements and the like) alter control flow by only executing blocks of code if certain conditions are met. These structures essentially allow a program to make decisions about which code is executed as the program runs."
                        ],
                        "code": [
                            "console.log('Hi there!');",
                            "// Prints: Hi there!"
                        ]
                    },
                    {
                        "title": "Logical Operator ||",
                        "text": [
                            "The logical OR operator || checks two values and returns a boolean. If one or both values are truthy, it returns true. If both values are falsy, it returns false.",
                            [["table"], ["A", "B", "A||B"], ["false", "false", "false"], ["false", "true", "true"], ["true", "false", "true"], ["true", "true", "true"]]
                        ],
                        "code": [
                            "true || false;        // true",
                            "10 > 5 || 10 > 20;    // true",
                            "false || false;       // false",
                            "10 > 100 || 10 > 20;  // false"
                        ]
                    },
                    {
                        "title": "Ternary Operator",
                        "text": [
                            "The ternary operator allows for a compact syntax in the case of binary (choosing between two choices) decisions. It accepts a condition followed by a ? operator, and then two expressions separated by a :. If the condition evaluates to truthy, the first expression is executed, otherwise, the second expression is executed."
                        ],
                        "code": [
                            "let price = 10.5;",
                            "let day = 'Monday';",
                            "day === 'Monday' ? price -= 1.5 : price += 1.5;"
                        ]
                    },
                    {
                        "title": "else Statement",
                        "text": [
                            "An else block can be added to an if block or series of if-else if blocks. The else block will be executed only if the if condition fails."
                        ],
                        "code": [
                            "const isTaskCompleted = false; ",
                            "if (isTaskCompleted) {",
                            "  console.log('Task completed');",
                            "} else {",
                            "  console.log('Task incomplete');",
                            "}"
                        ]
                    },
                    {
                        "title": "Logical Operator &&",
                        "text": [
                            "The logical AND operator && checks two values and returns a boolean. If both values are truthy, then it returns true. If one, or both, of the values is falsy, then it returns false."
                        ],
                        "code": [
                            "true && true;      // true",
                            "1 > 2 && 2 > 1;    // false",
                            "true && false;     // false",
                            "4 === 4 && 3 > 1;  // true"
                        ]
                    },
                    {
                        "title": "switch Statement",
                        "text": [
                            "The switch statements provide a means of checking an expression against multiple case clauses. If a case matches, the code inside that clause is executed.",
                            "The case clause should finish with a break keyword. If no case matches but a default clause is included, the code inside default will be executed.",
                            "Note: If break is omitted from the block of a case, the switch statement will continue to check against case values until a break is encountered or the flow is broken."
                        ],
                        "code": [
                            "const food = 'salad';",
                            "switch (food) {",
                            "  case 'oyster':",
                            "    console.log('The taste of the sea 🦪');",
                            "    break;",
                            "  case 'pizza':",
                            "    console.log('A delicious pie 🍕');",
                            "    break;",
                            "  default:",
                            "    console.log('Enjoy your meal');",
                            "}",
                            "// Prints: Enjoy your meal"
                        ]
                    },
                    {
                        "title": "if Statement",
                        "text": [
                            "An if statement accepts an expression with a set of parentheses:",
                            [
                                "If the expression evaluates to a truthy value, then the code within its code body executes.",
                                "If the expression evaluates to a falsy value, its code body will not execute."
                            ]
                        ],
                        "code": [
                            "const isMailSent = true;",
                            "if (isMailSent) {",
                            "  console.log('Mail sent to recipient');",
                            "}"
                        ]
                    },
                    {
                        "title": "Comparison Operators",
                        "text": [
                            "Comparison operators are used to comparing two values and return true or false depending on the validity of the comparison:",
                            [
                                "=== strict equal",
                                "!== strict not equal",
                                "> greater than",
                                ">= greater than or equal",
                                "< less than",
                                "<= less than or equal"
                            ]
                        ],
                        "code": [
                            "1 > 3       // false",
                            "3 > 1       // true",
                            "250 >= 250  // true",
                            "1 === 1     // true",
                            "1 === 2     // false",
                            "1 === '1'   // false"
                        ]
                    },
                    {
                        "title": "else if Clause",
                        "text": [
                            "After an initial if block, else if blocks can each check an additional condition. An optional else block can be added after the else if block(s) to run by default if none of the conditionals evaluated to truthy."
                        ],
                        "code": [
                            "const size = 10;",
                            "if (size > 100) {",
                            "  console.log('Big');",
                            "} else if (size > 20) {",
                            "  console.log('Medium');",
                            "} else if (size > 4) {",
                            "  console.log('Small');",
                            "} else {",
                            "  console.log('Tiny');",
                            "}",
                            "// Print: Small"
                        ]
                    },
                    {
                        "title": "Truthy and Falsy",
                        "text": [
                            "In JavaScript, values evaluate to true or false when evaluated as Booleans.",
                            [
                                "Values that evaluate to true are known as truthy",
                                "Values that evaluate to false are known as falsy"
                            ],
                            "Falsy values include false, 0, empty strings, null undefined, and NaN. All other values are truthy."
                        ]
                    },
                ]
            },
            {
                "title": "Functions",
                "content": [
                    {
                        "title": "Arrow Functions (ES6)",
                        "text": [
                            "Arrow function expressions were introduced in ES6. These expressions are clean and concise. The syntax for an arrow function expression does not require the function keyword and uses a fat arrow => to separate the parameter(s) from the body.",
                            "There are several variations of arrow functions:",
                            [
                                "Arrow functions with a single parameter do not require () around the parameter list.",
                                "Arrow functions with a single expression can use the concise function body which returns the result of the expression without the return keyword."
                            ]
                        ],
                        "code": [
                            "// Arrow function with two parameters ",
                            "const sum = (firstParam, secondParam) => { ",
                            "  return firstParam + secondParam;",
                            "};",
                            "console.log(sum(2,5)); // Prints: 7",
                            "// Arrow function with no parameters",
                            "const printHello = () => {",
                            "  console.log('hello');",
                            "};",
                            "printHello(); // Prints: hello",
                            "// Arrow functions with a single parameter",
                            "const checkWeight = weight => { ",
                            "  console.log(`Baggage weight : ${weight} kilograms.`); ",
                            "};",
                            "checkWeight(25); // Prints: Baggage weight : 25 kilograms.",
                            "// Concise arrow functions",
                            "const multiply = (a, b) => a * b; ",
                            "console.log(multiply(2, 30)); // Prints: 60"
                        ]
                    },
                    {
                        "title": "Functions",
                        "text": [
                            "Functions are one of the fundamental building blocks in JavaScript. A function is a reusable set of statements to perform a task or calculate a value. Functions can be passed one or more values and can return a value at the end of their execution. In order to use a function, you must define it somewhere in the scope where you wish to call it.",
                            "The example code provided contains a function that takes in 2 values and returns the sum of those numbers."
                        ],
                        "code": [
                            "// Defining the function:",
                            "function sum(num1, num2) {",
                            "  return num1 + num2;",
                            "}",
                            "// Calling the function:",
                            "sum(3, 6); // 9"
                        ]
                    },
                    {
                        "title": "Anonymous Functions",
                        "text": [
                            "Anonymous functions in JavaScript do not have a name property. They can be defined using the function keyword, or as an arrow function. See the code example for the difference between a named function and an anonymous function."
                        ],
                        "code": [
                            "// Named function",
                            "function rocketToMars() {",
                            "  return 'BOOM!';",
                            "}",
                            "// Anonymous function",
                            "const rocketToMars = function() {",
                            "  return 'BOOM!';",
                            "}"
                        ]
                    },
                    {
                        "title": "Function Expressions",
                        "text": [
                            "Function expressions create functions inside an expression instead of as a function declaration. They can be anonymous and/or assigned to a variable."
                        ],
                        "code": [
                            "const dog = function() {",
                            "  return 'Woof!';",
                            "}"
                        ]
                    },
                    {
                        "title": "Function Parameters",
                        "text": [
                            "Inputs to functions are known as parameters when a function is declared or defined. Parameters are used as variables inside the function body. When the function is called, these parameters will have the value of whatever is passed in as arguments. It is possible to define a function without parameters."
                        ],
                        "code": [
                            "// The parameter is name",
                            "function sayHello(name) {",
                            "  return `Hello, ${name}!`;",
                            "}"
                        ]
                    },
                    {
                        "title": "return Keyword",
                        "text": [
                            "Functions return (pass back) values using the return keyword. return ends function execution and returns the specified value to the location where it was called. A common mistake is to forget the return keyword, in which case the function will return undefined by default."
                        ],
                        "code": [
                            "// With return",
                            "function sum(num1, num2) {",
                            "  return num1 + num2;",
                            "}",
                            "// Without return, so the function doesn't output the sum",
                            "function sum(num1, num2) {",
                            "  num1 + num2;",
                            "}"
                        ]
                    },
                    {
                        "title": "Function Declaration",
                        "text": [
                            "Function declarations are used to create named functions. These functions can be called using their declared name. Function declarations are built from:",
                            ["The function keyword.", "The function name.", "An optional list of parameters separated by commas enclosed by a set of parentheses ().", "A function body enclosed in a set of curly braces {}."]
                        ],
                        "code": [
                            "function add(num1, num2) {",
                            "  return num1 + num2;",
                            "}"
                        ]
                    },
                    {
                        "title": "Calling Functions",
                        "text": [
                            "Functions can be called, or executed, elsewhere in code using parentheses following the function name. When a function is called, the code inside its function body runs. Arguments are values passed into a function when it is called."
                        ],
                        "code": [
                            "// Defining the function",
                            "function sum(num1, num2) {",
                            "  return num1 + num2;",
                            "}",
                            "// Calling the function",
                            "sum(2, 4); // 6"
                        ]
                    }
                ]
            },
            {
                "title": "Scope",
                "content": [
                    {
                        "title": "Scope",
                        "text": [
                            "Scope is a concept that refers to where values and functions can be accessed.",
                            "Various scopes include:Various scopes include:",
                            [
                                "Global scope (a value/function in the global scope can be used anywhere in the entire program)",
                                "File or module scope (the value/function can only be accessed from within the file)",
                                "Function scope (only visible within the function),",
                                "Code block scope (only visible within a { ... } codeblock)"
                            ]
                        ],
                        "code": [
                            "function myFunction() {",
                            "  var pizzaName = 'Volvo';",
                            "  // Code here can use pizzaName",
                            "}",
                            "// Code here can't use pizzaName"
                        ]
                    },
                    {
                        "title": "Block Scoped Variables",
                        "text": [
                            "const and let are block scoped variables, meaning they are only accessible in their block or nested blocks. In the given code block, trying to print the statusMessage using the console.log() method will result in a ReferenceError. It is accessible only inside that if block."
                        ],
                        "code": [
                            "const isLoggedIn = true; ",
                            "if (isLoggedIn == true) {",
                            "  const statusMessage = 'User is logged in.';",
                            "}",
                            "console.log(statusMessage);",
                            "// Uncaught ReferenceError: statusMessage is not defined"
                        ]
                    },
                    {
                        "title": "Global Variables",
                        "text": [
                            "JavaScript variables that are declared outside of blocks or functions can exist in the global scope, which means they are accessible throughout a program. Variables declared outside of smaller block or function scopes are accessible inside those smaller scopes.",
                            "Note: It is best practice to keep global variables to a minimum."
                        ],
                        "code": [
                            "// Variable declared globally",
                            "const color = 'blue';",
                            "function printColor() {",
                            "  console.log(color);",
                            "}",
                            "printColor(); // Prints: blue"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "title": "JavaScript syntax, Part 2",
        "content": [
            {
                "title": "Arrays",
                "content": [
                    {
                        "title": "Property .length",
                        "text": [
                            "The .length property of a JavaScript array indicates the number of elements the array contains."
                        ],
                        "code": [
                            "const numbers = [1, 2, 3, 4];",
                            "numbers.length // 4"
                        ]
                    },
                    {
                        "title": "Index",
                        "text": [
                            "Array elements are arranged by index values, starting at 0 as the first element index. Elements can be accessed by their index using the array name, and the index surrounded by square brackets."
                        ],
                        "code": [
                            "// Accessing an array element",
                            "const myArray = [100, 200, 300];",
                            "console.log(myArray[0]); // 100",
                            "console.log(myArray[1]); // 200",
                            "console.log(myArray[2]); // 300"
                        ]
                    },
                    {
                        "title": "Method .push()",
                        "text": [
                            "The .push() method of JavaScript arrays can be used to add one or more elements to the end of an array. .push() mutates the original array and returns the new length of the array."
                        ],
                        "code": [
                            "// Adding a single element:",
                            "const cart = ['apple', 'orange'];",
                            "cart.push('pear'); ",
                            "// Adding multiple elements:",
                            "const numbers = [1, 2];",
                            "numbers.push(3, 4, 5);"
                        ]
                    },
                    {
                        "title": "Method .pop()",
                        "text": [
                            "The .pop() method removes the last element from an array and returns that element."
                        ],
                        "code": [
                            "const ingredients = ['eggs', 'flour', 'chocolate'];",
                            "const poppedIngredient = ingredients.pop(); // 'chocolate'",
                            "console.log(ingredients); // ['eggs', 'flour']",
                        ]
                    },
                    {
                        "title": "Mutable",
                        "text": [
                            "JavaScript arrays are mutable, meaning that the values they contain can be changed.",
                            "Even if they are declared using const, the contents can be manipulated by reassigning internal values or using methods like .push() and .pop()."
                        ],
                        "code": [
                            "const names = ['Alice', 'Bob'];",
                            "names.push('Carl');",
                            "// ['Alice', 'Bob', 'Carl']",
                        ]
                    },
                    {
                        "title": "Arrays",
                        "text": [
                            "Arrays are lists of ordered, stored data. They can hold items that are of any data type. Arrays are created by using square brackets, with individual elements separated by commas."
                        ],
                        "code": [
                            "// An array containing numbers",
                            "const numberArray = [0, 1, 2, 3];",
                            "// An array containing different data types",
                            "const mixedArray = [1, 'chicken', false];"
                        ]
                    }
                ]
            },
            {
                "title": "Loops",
                "content": [
                    {
                        "title": "While Loop",
                        "text": [
                            "The while loop creates a loop that is executed as long as a specified condition evaluates to true. The loop will continue to run until the condition evaluates to false. The condition is specified before the loop, and usually, some variable is incremented or altered in the while loop body to determine when the loop should stop."
                        ],
                        "code": [
                            "while (condition) {",
                            "  // code block to be executed",
                            "}",
                            "let i = 0;",
                            "while (i < 5) { ",
                            "  console.log(i);",
                            "  i++;",
                            "}"
                        ]
                    },
                    {
                        "title": "Reverse Loop",
                        "text": [
                            "A for loop can iterate “in reverse” by initializing the loop variable to the starting value, testing for when the variable hits the ending value, and decrementing (subtracting from) the loop variable at each iteration."
                        ],
                        "code": [
                            "const items = ['apricot', 'banana', 'cherry'];",
                            "for (let i = items.length - 1; i >= 0; i -= 1) {",
                            "  console.log(`${i}. ${items[i]}`);",
                            "}",
                            "// Prints: 2. cherry ",
                            "// Prints: 1. banana",
                            "// Prints: 0. apricot"
                        ]
                    },
                    {
                        "title": "Do…While Statement",
                        "text": [
                            "A do...while statement creates a loop that executes a block of code once, checks if a condition is true, and then repeats the loop as long as the condition is true. They are used when you want the code to always execute at least once. The loop ends when the condition evaluates to false."
                        ],
                        "code": [
                            "x = 0",
                            "i = 0",
                            "do {",
                            "  x = x + i;",
                            "  console.log(x)",
                            "  i++;",
                            "} while (i < 5);",
                            "// Prints: 0 1 3 6 10"
                        ]
                    },
                    {
                        "title": "For Loop",
                        "text": [
                            "A for loop declares looping instructions, with three important pieces of information separated by semicolons ;:",
                            [
                                "The initialization defines where to begin the loop by declaring (or referencing) the iterator variable",
                                "The stopping condition determines when to stop looping (when the expression evaluates to false)",
                                "The iteration statement updates the iterator each time the loop is completed"
                            ]
                        ],
                        "code": [
                            "for (let i = 0; i < 4; i += 1) {",
                            "  console.log(i);",
                            "};",
                            "// Output: 0, 1, 2, 3"
                        ]
                    },
                    {
                        "title": "Looping Through Arrays",
                        "text": [
                            "An array’s length can be evaluated with the .length property. This is extremely helpful for looping through arrays, as the .length of the array can be used as the stopping condition in the loop."
                        ],
                        "code": [
                            "for (let i = 0; i < array.length; i++){",
                            "  console.log(array[i]);",
                            "};",
                            "// Output: Every item in the array"
                        ]
                    },
                    {
                        "title": "Break Keyword",
                        "text": [
                            "Within a loop, the break keyword may be used to exit the loop immediately, continuing execution after the loop body.",
                            "Here, the break keyword is used to exit the loop when i is greater than 5."
                        ],
                        "code": [
                            "for (let i = 0; i < 99; i += 1) {",
                            "  if (i > 5) {",
                            "     break;",
                            "  }",
                            "  console.log(i)",
                            "}",
                            "// Output: 0 1 2 3 4 5"
                        ]
                    },
                    {
                        "title": "Nested For Loop",
                        "text": [
                            "A nested for loop is when a for loop runs inside another for loop.",
                            "The inner loop will run all its iterations for each iteration of the outer loop."
                        ],
                        "code": [
                            "for (let outer = 0; outer < 2; outer += 1) {",
                            "  for (let inner = 0; inner < 3; inner += 1) {",
                            "    console.log(`${outer}-${inner}`);",
                            "  }",
                            "}",
                            "/*",
                            "Output:",
                            "0-0",
                            "0-1",
                            "0-2",
                            "1-0",
                            "1-1",
                            "1-2",
                            "*/"
                        ]
                    },
                    {
                        "title": "Loops",
                        "text": [
                            "A loop is a programming tool that is used to repeat a set of instructions. Iterate is a generic term that means “to repeat” in the context of loops. A loop will continue to iterate until a specified condition, commonly known as a stopping condition, is met."
                        ]
                    }
                ]
            },
            {
                "title": "Objects",
                "content": [
                    {
                        "title": "Restrictions in Naming Properties",
                        "text": [
                            "JavaScript object key names must adhere to some restrictions to be valid. Key names must either be strings or valid identifier or variable names (i.e. special characters such as - are not allowed in key names that are not strings)."
                        ],
                        "code": [
                            "// Example of invalid key names",
                            "const trainSchedule = {",
                            "  platform num: 10, // Invalid because of the space between words.",
                            "  40 - 10 + 2: 30, // Expressions cannot be keys.",
                            "  +compartment: 'C' // The use of a + sign is invalid unless it is enclosed in quotations.",
                            "}"
                        ]
                    },
                    {
                        "title": "Dot Notation for Accessing Object Properties",
                        "text": [
                            "Properties of a JavaScript object can be accessed using the dot notation in this manner: object.propertyName. Nested properties of an object can be accessed by chaining key names in the correct order."
                        ],
                        "code": [
                            "const apple = {",
                            "  color: 'Green',",
                            "  price: {",
                            "    bulk: '$3/kg',",
                            "    smallQty: '$4/kg'",
                            "  }",
                            "};",
                            "console.log(apple.color); // 'Green'",
                            "console.log(apple.price.bulk); // '$3/kg'"
                        ]
                    },
                    {
                        "title": "Objects",
                        "text": [
                            "An object is a built-in data type for storing key-value pairs. Data inside objects are unordered, and the values can be of any type."
                        ]
                    },
                    {
                        "title": "Accessing non-existent JavaScript properties",
                        "text": [
                            "When trying to access a JavaScript object property that has not been defined yet, the value of undefined will be returned by default."
                        ],
                        "code": [
                            "const classElection = {",
                            "  date: 'January 12'",
                            "};",
                            "console.log(classElection.place); // undefined"
                        ]
                    },
                    {
                        "title": "JavaScript Objects are Mutable",
                        "text": [
                            "JavaScript objects are mutable, meaning their contents can be changed, even when they are declared as const. New properties can be added, and existing property values can be changed or deleted.",
                            "It is the reference to the object, bound to the variable, that cannot be changed."
                        ],
                        "code": [
                            "const student = {",
                            "  name: 'Sheldon',",
                            "  score: 100,",
                            "  grade: 'A',",
                            "}",
                            "console.log(student)",
                            "// { name: 'Sheldon', score: 100, grade: 'A' }",
                            "delete student.score",
                            "student.grade = 'F'",
                            "console.log(student)",
                            "// { name: 'Sheldon', grade: 'F' }",
                            "student = {}student = {}",
                            "// TypeError: Assignment to constant variable."
                        ]
                    },
                    {
                        "title": "JavaScript for...in loop",
                        "text": [
                            "The JavaScript for...in loop can be used to iterate over the keys of an object. In each iteration, one of the properties from the object is assigned to the variable of that loop."
                        ],
                        "code": [
                            "let mobile = {",
                            "  brand: 'Samsung',",
                            "  model: 'Galaxy Note 9'",
                            "  grade: 'A',",
                            "};",
                            "for (let key in mobile) {",
                            "  console.log(`${key}: ${mobile[key]}`);",
                            "}"
                        ]
                    },
                    {
                        "title": "Properties and values of a JavaScript object",
                        "text": [
                            "A JavaScript object literal is enclosed with curly braces {}. Values are mapped to keys in the object with a colon (:), and the key-value pairs are separated by commas. All the keys are unique, but values are not.",
                            "Key-value pairs of an object are also referred to as properties."
                        ],
                        "code": [
                            "const classOf2018 = {",
                            "  students: 38,",
                            "  year: 2018",
                            "}"
                        ]
                    },
                    {
                        "title": "Delete operator",
                        "text": [
                            "Once an object is created in JavaScript, it is possible to remove properties from the object using the delete operator. The delete keyword deletes both the value of the property and the property itself from the object. The delete operator only works on properties, not on variables or functions."
                        ],
                        "code": [
                            "const person = {",
                            "  firstName: 'Matilda',",
                            "  age: 27,",
                            "  hobby: 'knitting',",
                            "  goal: 'learning JavaScript'",
                            "};",
                            "delete person.hobby; // or delete person[hobby];",
                            "console.log(person);",
                            "/*",
                            "{",
                            "  firstName: 'Matilda'",
                            "  age: 27",
                            "  goal: 'learning JavaScript'",
                            "}",
                            "*/"
                        ]
                    },
                    {
                        "title": "javascript passing objects as arguments",
                        "text": [
                            "When JavaScript objects are passed as arguments to functions or methods, they are passed by reference, not by value. This means that the object itself (not a copy) is accessible and mutable (can be changed) inside that function."
                        ],
                        "code": [
                            "const origNum = 8;",
                            "const origObj = {color: 'blue'};",
                            "const changeItUp = (num, obj) => {",
                            "  num = 7;",
                            "  obj.color = 'red';",
                            "};",
                            "changeItUp(origNum, origObj);",
                            "// Will output 8 since integers are passed by value.",
                            "console.log(origNum);",
                            "// Will output 'red' since objects are passed ",
                            "// by reference and are therefore mutable.",
                            "console.log(origObj.color);"
                        ]
                    },
                    {
                        "title": "JavaScript Object Methods",
                        "text": [
                            "JavaScript objects may have property values that are functions. These are referred to as object methods.",
                            "Methods may be defined using anonymous arrow function expressions, or with shorthand method syntax.",
                            "Object methods are invoked with the syntax: objectName.methodName(arguments)."
                        ],
                        "code": [
                            "const engine = {",
                            "  // method shorthand, with one argument",
                            "  start(adverb) {",
                            "    console.log(`The engine starts up ${adverb}...`);",
                            "}, ",
                            "  // anonymous arrow function expression with no arguments",
                            "  sputter: () => {",
                            "    console.log('The engine sputters...');",
                            "};",
                            "engine.start('noisily');",
                            "engine.sputter();",
                            "/* Console output:",
                            "The engine starts up noisily...",
                            "The engine sputters...",
                            "*/"
                        ]
                    },
                    {
                        "title": "JavaScript destructuring assignment shorthand syntax",
                        "text": [
                            "The JavaScript destructuring assignment is a shorthand syntax that allows object properties to be extracted into specific variable values.",
                            "It uses a pair of curly braces ({}) with property names on the left-hand side of an assignment to extract values from objects. The number of variables can be less than the total properties of an object."
                        ],
                        "code": [
                            "const rubiksCubeFacts = {",
                            "  possiblePermutations: '43,252,003,274,489,856,000',",
                            "  invented: '1974',",
                            "  largestCube: '17x17x17'",
                            "};",
                            "const {possiblePermutations, invented, largestCube} = rubiksCubeFacts;",
                            "console.log(possiblePermutations); // '43,252,003,274,489,856,000'",
                            "console.log(invented); // '1974'",
                            "console.log(largestCube); // '17x17x17'"
                        ]
                    },
                    {
                        "title": "shorthand property name syntax for object creation",
                        "text": [
                            "The shorthand property name syntax in JavaScript allows creating objects without explicitly specifying the property names (ie. explicitly declaring the value after the key). In this process, an object is created where the property names of that object match variables which already exist in that context. Shorthand property names populate an object with a key matching the identifier and a value matching the identifier’s value."
                        ],
                        "code": [
                            "const activity = 'Surfing';",
                            "const beach = { activity };",
                            "console.log(beach); // { activity: 'Surfing' }"
                        ]
                    },
                    {
                        "title": "this Keyword",
                        "text": [
                            "The reserved keyword this refers to a method’s calling object, and it can be used to access properties belonging to that object.",
                            "Here, using the this keyword inside the object function to refer to the cat object and access its name property."
                        ],
                        "code": [
                            "const cat = {",
                            "  name: 'Pipey',",
                            "  age: 8,",
                            "  whatName() {",
                            "    return this.name",
                            "  }",
                            "};",
                            "console.log(cat.whatName()); ",
                            "// Output: Pipey"
                        ]
                    },
                    {
                        "title": "javascript function this",
                        "text": [
                            "Every JavaScript function or method has a this context. For a function defined inside of an object, this will refer to that object itself. For a function defined outside of an object, this will refer to the global object (window in a browser, global in Node.js)."
                        ],
                        "code": [
                            "const restaurant = {",
                            "  numCustomers: 45,",
                            "  seatCapacity: 100,",
                            "  availableSeats() {",
                            "    // this refers to the restaurant object",
                            "    // and it's used to access its properties",
                            "    return this.seatCapacity - this.numCustomers;",
                            "  }",
                            "}"
                        ]
                    },
                    {
                        "title": "JavaScript Arrow Function this Scope",
                        "text": [
                            "JavaScript arrow functions do not have their own this context, but use the this of the surrounding lexical context. Thus, they are generally a poor choice for writing object methods.",
                            "Consider the example code:",
                            "loggerA is a property that uses arrow notation to define the function. Since data does not exist in the global context, accessing this.data returns undefined.loggerA is a property that uses arrow notation to define the function. Since data does not exist in the global context, accessing this.data returns undefined.",
                            "loggerB uses method syntax. Since this refers to the enclosing object, the value of the data property is accessed as expected, returning 'abc'."
                        ],
                        "code": [
                            "const myObj = {",
                            "    data: 'abc',",
                            "    loggerA: () => { console.log(this.data); },",
                            "    loggerB() { console.log(this.data); },",
                            "};",
                            "myObj.loggerA();    // undefined",
                            "myObj.loggerB();    // 'abc'"
                        ]
                    },
                    {
                        "title": "getters and setters intercept property access",
                        "text": [
                            "JavaScript getter and setter methods are helpful in part because they offer a way to intercept property access and assignment, and allow for additional actions to be performed before these changes go into effect."
                        ],
                        "code": [
                            "const myCat = {",
                            "  _name: 'Snickers',",
                            "  get name(){",
                            "    return this._name",
                            "  },",
                            "  set name(newName){",
                            "    //Verify that newName is a non-empty string before setting as name property",
                            "    if (typeof newName === 'string' && newName.length > 0){",
                            "      this._name = newName;",
                            "    } else {",
                            "      console.log('ERROR: name must be a non-empty string');",
                            "    }",
                            "  }",
                            "}"
                        ]
                    },
                    {
                        "title": "javascript factory functions",
                        "text": [
                            "A JavaScript function that returns an object is known as a factory function. Factory functions often accept parameters in order to customize the returned object."
                        ],
                        "code": [
                            "// A factory function that accepts 'name',",
                            "// 'age', and 'breed' parameters to return ",
                            "// a customized dog object.",
                            "const dogFactory = (name, age, breed) => {",
                            "  return {",
                            "    name: name,",
                            "    age: age,",
                            "    breed: breed,",
                            "    bark() {",
                            "      console.log('Woof!');  ",
                            "    }",
                            "  };",
                            "};"
                        ]
                    },
                    {
                        "title": "javascript getters and setters restricted",
                        "text": [
                            "JavaScript object properties are not private or protected. Since JavaScript objects are passed by reference, there is no way to fully prevent incorrect interactions with object properties.",
                            "One way to implement more restricted interactions with object properties is to use getter and setter methods.",
                            "Typically, the internal value is stored as a property with an identifier that matches the getter and setter method names, but begins with an underscore (_)."
                        ],
                        "code": [
                            "const myCat = {",
                            "  _name: 'Dottie',",
                            "  get name() {",
                            "    return this._name;",
                            "  },",
                            "  set name(newName) {",
                            "    this._name = newName;",
                            "  }",
                            "};",
                            "// Reference invokes the getter",
                            "console.log(myCat.name);",
                            "// Assignment invokes the setter",
                            "myCat.name = 'Yankee';"
                        ]
                    }
                ]
            },
            {
                "title": "Iterators",
                "content": [
                    {
                        "title": "Functions Assigned to Variables",
                        "text": [
                            "In JavaScript, functions are a data type just as strings, numbers, and arrays are data types. Therefore, functions can be assigned as values to variables, but are different from all other data types because they can be invoked."
                        ],
                        "code": [
                            "let plusFive = (number) => {",
                            "  return number + 5;",
                            "};",
                            "// f is assigned the value of plusFive",
                            "let f = plusFive;",
                            "plusFive(3); // 8",
                            "// Since f has a function value, it can be invoked.",
                            "f(9); // 14"
                        ]

                    },
                    {
                        "title": "Callback Functions",
                        "text": [
                            "In JavaScript, a callback function is a function that is passed into another function as an argument. This function can then be invoked during the execution of that higher order function (that it is an argument of).",
                            "Since, in JavaScript, functions are objects, functions can be passed as arguments."
                        ],
                        "code": [
                            "const isEven = (n) => {",
                            "  return n % 2 == 0;",
                            "}",
                            "let printMsg = (evenFunc, num) => {",
                            "  const isNumEven = evenFunc(num);",
                            "  console.log(`The number ${num} is an even number: ${isNumEven}.`)",
                            "}",
                            "// Pass in isEven as the callback function",
                            "printMsg(isEven, 4);",
                            "// Prints: The number 4 is an even number: True."
                        ]
                    },
                    {
                        "title": "Higher-Order Functions",
                        "text": [
                            "In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well.",
                            "A “higher-order function” is a function that accepts functions as parameters and/or returns a function."
                        ]
                    },
                    {
                        "title": "JavaScript Functions: First-Class Objects",
                        "text": [
                            "JavaScript functions are first-class objects. Therefore:",
                            [
                                "They have built-in properties and methods, such as the name property and the .toString() method.",
                                "Properties and methods can be added to them.",
                                "They can be passed as arguments and returned from other functions.",
                                "They can be assigned to variables, array elements, and other objects."
                            ]
                        ],
                        "code": [
                            "//Assign a function to a variable originalFunc",
                            "const originalFunc = (num) => { return num + 2 };",
                            "//Re-assign the function to a new variable newFunc",
                            "const newFunc = originalFunc;",
                            "//Access the function's name property",
                            "newFunc.name; //'originalFunc'",
                            "//Return the function's body as a string",
                            "newFunc.toString(); //'(num) => { return num + 2 }'",
                            "//Add our own isMathFunction property to the function",
                            "newFunc.isMathFunction = true;",
                            "//Pass the function as an argument",
                            "const functionNameLength = (func) => { return func.name.length }; ",
                            "functionNameLength(originalFunc); //12",
                            "//Return the function",
                            "const returnFunc = () => { return newFunc };",
                            "returnFunc(); //[Function: originalFunc]"
                        ]
                    },
                    {
                        "title": "The .reduce() Method",
                        "text": [
                            "The .reduce() method iterates through an array and returns a single value.",
                            "In the above code example, the .reduce() method will sum up all the elements of the array. It takes a callback function with two parameters (accumulator, currentValue) as arguments. On each iteration, accumulator is the value returned by the last iteration, and the currentValue is the current element. Optionally, a second argument can be passed which acts as the initial value of the accumulator."
                        ],
                        "code": [
                            "const arrayOfNumbers = [1, 2, 3, 4];",
                            "const sum = arrayOfNumbers.reduce((accumulator, currentValue) => { ",
                            "  return accumulator + currentValue;",
                            "});",
                            "console.log(sum); // 10"
                        ]
                    },
                    {
                        "title": "The .forEach() Method",
                        "text": [
                            "The .forEach() method executes a callback function on each of the elements in an array in order.",
                            "In the above example code, the callback function containing a console.log() method will be executed 5 times, once for each element."
                        ],
                        "code": [
                            "const numbers = [28, 77, 45, 99, 27];",
                            "numbers.forEach(number => {",
                            "  console.log(number);",
                            "});"
                        ]
                    },
                    {
                        "title": "The .filter() Method",
                        "text": [
                            "The .filter() method executes a callback function on each element in an array. The callback function for each of the elements must return either true or false. The returned array is a new array with any elements for which the callback function returns true.",
                            "In the above code example, the array filteredArray will contain all the elements of randomNumbers but 4."
                        ],
                        "code": [
                            "const randomNumbers = [4, 11, 42, 14, 39];",
                            "const filteredArray = randomNumbers.filter(n => { ",
                            "  return n > 5;",
                            "});"
                        ]
                    },
                    {
                        "title": "The .map() Method",
                        "text": [
                            "The .map() method executes a callback function on each element in an array. It returns a new array made up of the return values from the callback function.",
                            "The original array does not get altered, and the returned array may contain different elements than the original array.",
                            "In the example code above, the .map() method is used to add ' joined the contest.' string at the end of each element in the finalParticipants array."
                        ],
                        "code": [
                            "const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];",
                            "// add string after each final participant",
                            "const announcements = finalParticipants.map(member => {",
                            "  return member + ' joined the contest.';",
                            "})",
                            "console.log(announcements);"
                        ]
                    }
                ]
            },
            {
                "title": "Errors and debugging",
                "content": [
                    {
                        "title": "ReferenceError",
                        "text": [
                            "A ReferenceError is a type of error thrown when a variable is used that does not exist.",
                            "To prevent this error, all variables should be properly declared beforehand."
                        ],
                        "code": [
                            "// Example of a ReferenceError in JavaScript",
                            "let firstName = 'John';",
                            "// Here, we get a ReferenceError because lastName has not been declared",
                            "console.log(firstName + lastName);"
                        ]
                    },
                    {
                        "title": "MDN JavaScript error documentation",
                        "text": [
                            "The MDN JavaScript error documentation contains information about JavaScript error types, properties, and Methods. The document shows how to prevent and create these errors. This document is most helpful when developers come across an error they are not familiar with."
                        ]
                    },
                    {
                        "title": "SyntaxError",
                        "text": [
                            "A SyntaxError is a type of error that is thrown when there is a typo in the code, creating invalid code - code which cannot be interpreted by the compiler.",
                            "Some common causes of a SyntaxError are:",
                            [
                                "Missing opening or closing brackets, braces, or parentheses",
                                "Missing or invalid semicolons",
                                "Misspelling of variable names or functions"
                            ]

                        ],
                        "code": [
                            "# Example of a SyntaxError in Python",
                            "# A colon is missing after the closing parenthesis",
                            "def sum(a, b)",
                            "  return a + b"
                        ]
                    },
                    {
                        "title": "TypeError",
                        "text": [
                            "A TypeError is a type of error thrown when an attempt is made to perform an operation on a value of the incorrect type.",
                            "One example of a TypeError is using a string method on a numerical value."
                        ],
                        "code": [
                            "# Example of a TypeError in Python",
                            "number = 1",
                            "string = 'one'",
                            "# Here, we try to concatenate the number and string which will yield a TypeError",
                            "print(number + string)"
                        ]
                    },
                    {
                        "title": "Javascript error stack trace",
                        "text": [
                            "An error stack trace tells a developer that it has detected an error within the code. Along with, which line to find the error, what type of error has occurred and a description of the error."
                        ]
                    },
                    {
                        "title": "Javascript documentation",
                        "text": [
                            "Many times we can track down bugs, but still, be confused about how to solve it. During these situations, we can look at documentation. For JavaScript, the MDN JavaScript web docs is a powerful resource. If we are still confused after looking at this we can go to StackOverflow - a question and answer forum where programmers post issues and other programmers discuss and vote for solutions."
                        ]
                    }
                ]
            }
        ]
    }

]

let counterLink = 1
function createNav(parentElement, data) {
    let nav = document.createElement("ul");
    data.forEach(item => {
        let listitem = document.createElement("li")
        let linkItem = document.createElement("a")
        linkItem.innerHTML = createSpecialCharacters(item["title"])
        linkItem.setAttribute("href", "#" + counterLink);
        counterLink++
        listitem.appendChild(linkItem)
        nav.appendChild(listitem)
        if (item["content"]) {
            createNav(listitem, item["content"])
        }
    })
    parentElement.appendChild(nav)

}

let counterContent = 1;

function createContent(parentElement, data, level) {
    let container = document.createElement("div")

    let levelLoc = level
    data.forEach(item => {
        let header = document.createElement("h" + level)
        header.innerHTML = createSpecialCharacters(item["title"])
        header.setAttribute("id", counterContent);
        counterContent++;
        container.appendChild(header)

        if (item["text"]) {
            let containerContent = document.createElement("div")
            containerContent.classList.add("containerContent");
            let containertext = document.createElement("div")
            containertext.classList.add("text");
            let textList = item["text"]
            for (let i = 0; i < textList.length; i++) {
                let text = textList[i]
                if (typeof text === 'string') {
                    let paragraph = document.createElement("p")
                    paragraph.innerHTML = createSpecialCharacters(text)
                    containertext.appendChild(paragraph)
                }
                else {
                    let list;
                    if (text[0][0] === "table") {
                        list = document.createElement("table")
                        for (let j = 1; j < text.length; j++) {
                            let row = document.createElement("tr")
                            let rowList = text[j]

                            for (let x = 0; x < rowList.length; x++) {
                                let data = document.createElement("td")
                                console.log(rowList[x])
                                data.innerHTML = rowList[x]
                                row.appendChild(data)
                            }
                            list.appendChild(row)
                        }
                    }
                    else {
                        list = document.createElement("ul")
                        for (let i = 0; i < text.length; i++) {
                            let listItem = document.createElement("li")
                            listItem.innerHTML = createSpecialCharacters(text[i])
                            list.appendChild(listItem)
                        }
                    }
                    containertext.appendChild(list)
                }
            }
            containerContent.appendChild(containertext)


            if (item["code"]) {
                let containerCode = document.createElement("pre")
                containerCode.classList.add("code");
                let line = item["code"]
                for (let i = 0; i < line.length; i++) {
                    let lineCode = ""
                    if (line[i] !== "tab") {
                        lineCode += line[i]
                    }

                    let lineDom = document.createElement("p")
                    lineDom.innerHTML = createSpecialCharacters(lineCode)
                    containerCode.appendChild(lineDom)
                }
                containerContent.appendChild(containerCode)
            }
            container.appendChild(containerContent)
        }

        if (item["content"]) {
            createContent(container, item["content"], levelLoc + 1)
        }
    })
    parentElement.appendChild(container)
}

function createSpecialCharacters(string) {
    let stringMod = ""
    for (let i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "<":
                stringMod += "&lt"
                break;
            case ">":
                stringMod += "&gt"
                break;
            case "&":
                stringMod += "&amp"
                break;
            default:
                stringMod += string[i]
        }
    }
    return stringMod
}

createNav(document.getElementById("navigation"), data)
createContent(document.getElementById("content"), data, 2)
