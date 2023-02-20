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
                            "<p id='my-paragraph' style='color:green;'>Here’s some text for a ",
                            "paragraph that is being altered by HTML attributes</p>"
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
                            "<a href='https://www.google.com' target='_blank'>This anchor element links ",
                            "to google and will open in a new tab or window.</a > "
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
                            "<!-- The whitespace created by this line, and ",
                            "above / below this line is ignored by the browser-- > ",
                            "<p>Another test paragraph, this will sit right under the ",
                            "first paragraph, no extra space between.</p > "
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
                            "<a href='https://developer.mozilla.org/en-US/docs/Web'>The URL for ",
                            "this anchor element is an absolute file path.</a > ",
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
                            "/* Any element with class 'column' will be at most 200 pixels ",
                            "wide, despite the width property value of 500 pixels. * /",
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
                            "/*This determines that no other elements within the same containing ",
                            "element are allowed to float on the left side of this element.* /",
                            ".element {",
                            "  clear: left;",
                            "}",
                            "/*This determines that no other elements within the same containing ",
                            "element are allowed to float on the right side of this element.* /",
                            ".element {",
                            "  clear: right;",
                            "}",
                            "/*This determines that no elements within the same containing ",
                            "element are allowed to float on either side of this element.*/",
                            "/*This determines that no elements within the same containing element are allowed ",
                            "to float on either side of this element.* /",
                            ".element {",
                            "  clear: both;",
                            "}",
                            "/*This determines that other elements within the same containing element ",
                            "are allowed to float on both side of this element.* /",
                            ".element {",
                            "  clear: none;",
                            "}",
                        ]
                    }
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
    },
    {
        "title": "Git and GitHub, Part 1",
        "content": [
            {
                "title": "Basic Git Workflow",
                "content": [
                    {
                        "title": "Checking the Status of a Git Repository",
                        "text": [
                            "The git status command is used within a Git repository to its current status including the current commit, any modified files, and any new files not being tracked by Git.",
                            "The output of git status can vary widely, and it often includes helpful messages to direct the user to manage their repository. For example, git status will show the user the files they would commit by running git commit and the files they could commit by running git add before running git commit."
                        ]
                    },
                    {
                        "title": "Initializing a Git Repository",
                        "text": [
                            "The git init command creates or initializes a new Git project, or repository. It creates a .git folder with all the tools and data necessary to maintain versions. This command only needs to be used once per project to complete the initial setup. For instance, the code block sets up the home folder as a new git repository."
                        ],
                        "code": [
                            "$ cd /home",
                            "$ git init"
                        ]
                    },
                    {
                        "title": "Displaying Differences with Git Diff",
                        "text": [
                            "The git diff filename command will display the differences between the working directory and the staging area in one specific file. Use git diff filename before adding new content to ensure that you are making the changes you expect."
                        ],
                        "code": [
                            "$ git diff hello.txt",
                            "diff --git a/hello.txt b/hello.txt",
                            "index 557db03..980a0d5 100644",
                            "--- a/hello.txt",
                            "+++ b/hello.txt",
                            "@@ -1 +1 @@",
                            "-Hello World",
                            "+Hello World!"
                        ]
                    },
                    {
                        "title": "Showing Git Commit Logs",
                        "text": [
                            "In Git, the git log command shows all of the commit logs for a project. The following is displayed for each commit:",
                            [
                                "A 40-character code, called a SHA, that uniquely identifies the commit.",
                                "The commit author",
                                "The date and time of the commit",
                                "The commit message"
                            ],
                            "This command is particularly useful when you need to refer back to an old version of your project. The unique SHA code allows you to identify a point in your program’s history that you would like to revert to."
                        ],
                        "code": [
                            "$ git log",
                            "commit 9d63f80111447544c303e9f1776fa08593a87310",
                            "Author: codecademy <exampleuser@codecademy.com>",
                            "Date:   Wed Jan 13 18:55:53 2021 +0000",
                            "    Added updates to the file",
                            "commit 3ba6efbeece6ed530d85de5e313e52123fdf8cb4",
                            "Author: codecademy <exampleuser@codecademy.com>",
                            "Date:   Wed Jan 6 10:11:13 2021 -0400",
                            "    Completed first line of dialogue"
                        ]
                    },
                    {
                        "title": "Committing Your Code",
                        "text": [
                            "The git commit -m 'log message here' command creates a new commit containing:",
                            [
                                "The current contents of the staging area",
                                "A log message describing the changes to the repository"
                            ],
                            "A commit is the last step in our Git workflow. A commit permanently stores changes from the staging area inside the repository. This command is almost always used in conjunction with the git add command as git add is used to add files to the staging area."
                        ],
                        "code": [
                            "$ git commit -m 'Added About section to README'",
                            "[master 9d63f80] Added About section to README",
                            "1 file changed, 10 insertions(+), 1 deletion(-)"
                        ]
                    },
                    {
                        "title": "Git",
                        "text": [
                            "Git is a command line software that keeps track of changes made to a project over time. Git works by recording the changes made to a project, storing those changes, then allowing a programmer to reference them as needed.",
                            "All Git commands follow the pattern git <action> and, in order to use Git for a project, a project must first be initialized using the git init command in the project’s root directory."
                        ]
                    },
                    {
                        "title": "Adding Changes to the Staging Area",
                        "text": [
                            "The git add filename command is used to add the filename file to the staging area. After your changes have been staged, you can use the git commit command to permanently store your changes.",
                            [["img"], ["../resources/images/git-diff.webp"]]
                        ]
                    },
                    {
                        "title": "Git Project Workflow",
                        "text": [
                            "A Git project has three parts:",
                            [
                                "A Working Directory: where files are created, edited, deleted, and organized",
                                "A Staging Area: where changes that are made to the working directory are listed",
                                "A Repository: where Git permanently stores changes as different versions of the project"
                            ],
                            "The Git workflow consists of editing files in the working directory, adding files to the staging area, and saving changes to a Git repository."
                        ]
                    }
                ]
            },
            {
                "title": "Important Git Operations",
                "content": [
                    {
                        "title": "Showing Latest Commit Log",
                        "text": [
                            "In Git, the commit you are currently on is known as the HEAD commit.",
                            "The output of the git show HEAD command will display everything the git log command displays for the HEAD commit, plus all the file changes that were committed."
                        ],
                        "code": [
                            "$ git show HEAD",
                            "commit 735359632f3ca3fe572484a4ec3e0d7b0d9c8f2d",
                            "Author: codecademy <exampleuser@codecademy.com>",
                            "Date:   Wed Jul 6 10:20:58 2016 -0400",
                            "    scene-5.txt",
                            "diff --git a/scene-5.txt b/scene-5.txt",
                            "index b12dd97..5dd5d4e 100644",
                            "--- a/scene-5.txt",
                            "+++ b/scene-5.txt",
                            "@@ -12,3 +12,7 @@ Hamlet:",
                            "I will.",
                            "+Ghost:",
                            "+My hour is almost come,",
                            "+When I to sulphurous and tormenting flames",
                            "+Must render up myself.",
                            "\ No newline at end of file"
                        ]
                    },
                    {
                        "title": "Git Reset Using SHA",
                        "text": [
                            "In Git, the git reset commit_SHA command can be used to set HEAD to the commit_SHA commit. The commit_SHA argument is the first seven digits of a previous commit’s SHA. In this example, the HEAD was reset to the commit made on Wed Jan 6.",
                            "You can use git log to see a record of previous commits and their SHA values."
                        ],
                        "code": [
                            "$ git log",
                            "commit 9d63f80111447544c303e9f1776fa08593a87310",
                            "Author: codecademy <exampleuser@codecademy.com>",
                            "Date:   Wed Jan 13 18:55:53 2021 +0000",
                            "    Added updates to the file",
                            "commit 3ba6efbeece6ed530d85de5e313e52123fdf8cb4",
                            "Author: codecademy <exampleuser@codecademy.com>",
                            "Date:   Wed Jan 6 10:11:13 2021 -0400",
                            "    Completed first line of dialogue",
                            "$ git reset 3ba6efb$ git reset 3ba6efb"
                        ]
                    },
                    {
                        "title": "Staging Multiple Files",
                        "text": [
                            "In Git, the git add filename_1 filename_2 command is used to add multiple files to the staging area at once.",
                            "You can use git status to check if you properly added your files to the staging area."
                        ],
                        "code": [
                            "$ git add scene - 5.txt scene - 7.txt",
                            "$ git status",
                            "On branch master",
                            "Changes to be committed:",
                            '  (use ""git reset HEAD <file>..."" to unstage)',
                            "        modified:   scene-5.txt",
                            "        modified:   scene-7.txt"
                        ]
                    },
                    {
                        "title": "Remove File from Staging",
                        "text": [
                            "In Git, the git reset HEAD filename command will remove filename from the staging area. Note that this command does not discard file changes from the working directory. You might use this command if you’ve added a file to the staging area, but the file includes incorrect edits.",
                            "You can use the git status command to make sure your file was properly removed from the staging area."
                        ],
                        "code": [
                            "$ git reset HEAD scene-3.txt",
                            "Unstaged changes after reset:",
                            "M       scene-3.txt"
                        ]
                    },
                    {
                        "title": "Rolling Back to Last Commit",
                        "text": [
                            "In Git, the git checkout HEAD filename command rolls back all changes that have been made to filename since the last commit. In other words, this command will change your working directory to look exactly as it did when you last made a commit.",
                            "You can use the git diff command to see if the rollback was successful. If git diff doesn’t output anything, this means your working directory matches your last commit."
                        ],
                        "code": [
                            "$ git checkout HEAD scene-5.txt",
                            "$ git diff",
                            "$"
                        ]
                    },
                    {
                        "title": "git stash",
                        "text": [
                            "git stash allows you to get back to a clean commit point with a synchronized working tree, and avoid losing your local changes in the process of switching branches or tasks.",
                            "You’re “stashing” your local work temporarily in order to update a previous commit and later on retrieve your work.",
                            "You can use git stash pop to retrieve from your stash.",
                            [["img"], ["../resources/images/git-stash-pop-diagram.svg"]]
                        ]
                    },
                    {
                        "title": "git log options",
                        "text": [
                            "git log allows you to view the commit history of the branch you currently have checked out.",
                            "git log --oneline show the list of commits in one line format. `git log -S “keyword” displays a list of commits that contain the keyword in the message.",
                            "git log --oneline --graph displays a visual representation of how the branches and commits were created in order to help you make sense of your repository history.",
                            [["img"], ["../resources/images/git-log-oneline-graph.png"]]
                        ]
                    },
                    {
                        "title": "git commit –amend",
                        "text": [
                            "git commit --amend flag allows you to update a commit. To avoid creating a new one, you could create your changes, stage them with git add and then type the command git commit --amend to update your previous commit.",
                            "The terminal editor will ask you to update your commit message.",
                            [["img"], ["../resources/images/git-commit-amend.png"]]
                        ]
                    },
                    {
                        "title": "Git aliases",
                        "text": [
                            "If you have a set of commands that you use regularly and want to save some time from typing them, you can easily set up an alias for each command using Git config.",
                            "The following terminal command",
                            'git config --global alias.glop "log --pretty=format:"%h %s" --graph"',
                            "allows you to reduce the entire command to",
                            "git glop"

                        ]
                    }
                ]
            },
            {
                "title": "Introduction to GitHub",
                "content": [

                    {
                        "title": "The Main Branch",
                        "text": [
                            "In Git, the main project is completed on the main branch. Making your first commit in a new git repository will automatically create a main branch. Create new branches from the main branch to develop new features for a project. These branches can be merged into main at a later time to incorporate the new features. You can use git branch to check what branch you’re on."
                        ],
                        "code": [
                            "$ git init",
                            "Initialized empty Git repository in /home/ccuser/new-project/.git/",
                            '$ echo "Hello World!" >> hello.txt',
                            "$ git add hello.txt ",
                            "$ git commit -m 'initial commit'",
                            "[master (root-commit) bb0e565] initial commit",
                            " 1 file changed, 1 insertion(+)",
                            " create mode 100644 hello.txt",
                            "$ git branch",
                            "* master"
                        ]
                    },
                    {
                        "title": "Committing Your Code",
                        "text": [
                            'The git commit -m "log message here" command creates a new commit containing:',
                            [
                                "The current contents of the staging area",
                                "A log message describing the changes to the repository"
                            ],
                            "A commit is the last step in our Git workflow. A commit permanently stores changes from the staging area inside the repository. This command is almost always used in conjunction with the git add command as git add is used to add files to the staging area."
                        ],
                        "code": [
                            '$ git commit -m "Added About section to README"',
                            "[master 9d63f80] Added About section to README",
                            '1 file changed, 10 insertions(+), 1 deletion(-)'
                        ]
                    },
                    {
                        "title": "Deleting a Branch",
                        "text": [
                            "In Git, the git branch -d branch_name command is used to delete the branch_name branch. It’s good practice to delete a branch after it has been merged into the master branch.",
                            [["img"], ["../resources/images/learn-git-remove-branch.webp"]]

                        ],
                    },
                    {
                        "title": "Pull Requests on GitHub",
                        "text": [
                            "A pull request is a feature of GitHub and other source code management tools that allow a repository’s collaborators to review and give feedback on proposed code changes before they are accepted and merged to another branch, usually the main branch. Each pull request creates a discussion forum that can be used by reviewers and authors alike to highlight or add comments to a single line of code or chunk of code, add videos or images, etc.",
                            "Going through the pull request process can increase group knowledge, improve product quality, and develop professional skills through group critique.",
                            [["img"], ["../resources/images/branch-comparison.webp"]]
                        ]
                    }
                ]
            },
            {
                "title": "GitHub and Markdown",
                "content": [
                    {
                        "title": "A GitHub README File",
                        "text": [
                            "Adding a README file to your GitHub repository is the best way to introduce your project to others. Since it is usually the first thing others see on your repository, it is the best place to explain what your project does, why it’s useful, and how they can get started with it.",
                            [["img"], ["../resources/images/../resources/images/github-README.svg"]]
                        ]
                    },
                    {
                        "title": "Writing a Good README file",
                        "text": [
                            "A good README file in GitHub, at minimum, contains the following elements:",
                            [
                                "Title",
                                "Description",
                                "Features",
                                "How to use",
                                "Technologies",
                                "Collaborators",
                                "License"
                            ],
                            "You can further level up your README file with markdown:",
                            [
                                "Use headers and HTML to format your README and make it easier to read.",
                                "The headers automatically generate a table of contents on GitHub!",
                                "Use media, such as images and videos, to make your project look more appealing."
                            ],
                            [["img"], ["../resources/images/table-of-contents.webp"]]
                        ]
                    }
                ]
            }
        ]
    },
    {
        "title": "Build interactive website",
        "content": [
            {
                "title": "Javacript and the DOM",
                "content": [
                    {
                        "title": "HTML script element src attribute",
                        "text": [
                            "The src attribute of a <script> element is used to point to the location of a script file.",
                            "The file referenced can be local (using a relative path) or hosted elsewhere (using an absolute path)."
                        ],
                        "code": [
                            "<!-- Using a relative path -->",
                            "<script src='./script.js'></script>",
                            "<!-- Using an absolute path -->",
                            "<script src='https://code.jquery.com/jquery-3.3.1.min.js'></script>"
                        ]
                    },
                    {
                        "title": "HTML script element defer attribute",
                        "text": [
                            "The defer attribute of a <script> tag is a boolean attribute used to indicate that the script can be loaded but not executed until after the HTML document is fully parsed. It will only work for externally linked scripts (with a src attribute), and will have no effect if it is applied to an inline script.",
                            "In the example code block, the <h1> tag will be loaded and parsed before the script is executed due to the defer attribute."
                        ],
                        "code": [
                            "<body>",
                            "  <script src='main.js' defer></script>",
                            "  <h1>Hello</h1>",
                            "</body>"
                        ]
                    },
                    {
                        "title": "HTML script element defer attribute",
                        "text": [
                            "The defer attribute of a <script> tag is a boolean attribute used to indicate that the script can be loaded but not executed until after the HTML document is fully parsed. It will only work for externally linked scripts (with a src attribute), and will have no effect if it is applied to an inline script.",
                            "In the example code block, the <h1> tag will be loaded and parsed before the script is executed due to the defer attribute."
                        ],
                        "code": [
                            "<body>",
                            "  <script src='main.js' defer></script>",
                            "  <h1>Hello</h1>",
                            "</body>"
                        ]
                    },
                    {
                        "title": "HTML script tag async attribute",
                        "text": [
                            "Scripts are loaded synchronously as they appear in an HTML file, before the following HTML is loaded and parsed. The async attribute can be used to load the scripts asynchronously, such that they will load in the background without blocking the HTML parser from continuing.",
                            "In the example code block, the script will load asynchronously in the background, without blocking the HTML parser."
                        ],
                        "code": [
                            "<body>",
                            "  <script src='main.js' async></script>",
                            "  <h1>Hello world!</h1>",
                            "</body>"
                        ]
                    },
                    {
                        "title": "HTML script element",
                        "text": [
                            "The HTML <script> element can contain or reference JavaScript code in an HTML file. The <script> element needs both an opening and a closing tag, and JavaScript code can be embedded between the tags."
                        ],
                        "code": [
                            "<script>",
                            "  console.log('Hello world!');",
                            "</script>"
                        ]
                    },
                    {
                        "title": "Nodes in DOM tree",
                        "text": [
                            "A node in the DOM tree is the intersection of two branches containing data. Nodes can represent HTML elements, text, attributes, etc. The root node is the top-most node of the tree. The illustration shows a representation of a DOM containing different types of nodes.",
                            [["img"], ["../resources/images/dom-nodes.webp"]]
                        ]
                    },
                    {
                        "title": "HTML DOM",
                        "text": [
                            "The DOM is an interface between scripting languages and a web page’s structure. The browser creates a Document Object Model or DOM for each webpage it renders. The DOM allows scripting languages to access and modify a web page. With the help of DOM, JavaScript has the ability to create dynamic HTML."
                        ]
                    },
                    {
                        "title": "Accessing HTML attributes in DOM",
                        "text": [
                            "The DOM nodes of type Element allow access to the same attributes available to HTML elements. For instance, for the given HTML element, the id attribute will be accessible through the DOM."
                        ],
                        "code": [
                            "<h1 id='heading'>Welcome!</h1>"
                        ]
                    },
                    {
                        "title": "The Document Object Model",
                        "text": [
                            "The Document Object Model, or DOM is a representation of a document (like an HTML page) as a group of objects. While it is often used to represent HTML documents, and most web browsers use JavaScript interfaces to the DOM, it is language agnostic as a model.",
                            "The DOM is tree-like and heirarchical, meaning that there is a single top-level object, and other objects descend from it in a branching structure."
                        ]
                    },
                    {
                        "title": "The DOM Parent-Child Relationship",
                        "text": [
                            "The parent-child relationship observed in the DOM is reflected in the HTML nesting syntax.",
                            "Elements that are nested inside the opening and closing tag of another element are the children of that element in the DOM.",
                            "In the code block, the two <p> tags are children of the <body>, and the <body> is the parent of both <p> tags."
                        ],
                        "code": [
                            "< body > ",
                            "  <p>first child</p>",
                            "  <p>second child</p>",
                            "</body>"
                        ]
                    },
                    {
                        "title": "The removeChild() Method",
                        "text": [
                            "The .removeChild() method removes a specified child from a parent element. We can use this method by calling .removeChild() on the parent node whose child we want to remove, and passing in the child node as the argument.",
                            "In the example code block, we are removing iceCream from our groceryList element."
                        ],
                        "code": [
                            "const groceryList = document.getElementById('groceryList');",
                            "const iceCream = document.getElementById('iceCream');",
                            "groceryList.removeChild(iceCream);"
                        ]
                    },
                    {
                        "title": "The element.parentNode Property",
                        "text": [
                            "The .parentNode property of an element can be used to return a reference to its direct parent node. .parentNode can be used on any node.",
                            "In the code block above, we are calling on the parentNode of the #first-child element to get a reference to the #parent div element."
                        ],
                        "code": [
                            "<div id='parent'>",
                            "  <p id ='first-child'>Some child text</p>",
                            "  <p id ='second-child'>Some more child text</p>",
                            "</div>",
                            "<script>",
                            "  const firstChild = document.getElementById('first-child');",
                            "  firstChild.parentNode;  // reference to the #parent div",
                            "</script>"
                        ]
                    },
                    {
                        "title": "The document.createElement() Method",
                        "text": [
                            "The document.createElement() method creates and returns a reference to a new Element Node with the specified tag name.",
                            "document.createElement() does not actually add the new element to the DOM, it must be attached with a method such as element.appendChild()."
                        ],
                        "code": [
                            "const newButton = document.createElement('button');"
                        ]
                    },
                    {
                        "title": "The element.InnerHTML Property",
                        "text": [
                            "The element.innerHTML property can be used to access the HTML markup that makes up an element’s contents.",
                            "element.innerHTML can be used to access the current value of an element’s contents or to reassign it.",
                            "In the code block above, we are reassigning the box element’s inner HTML to a paragraph element with the text “Goodbye”."
                        ],
                        "code": [
                            "<box>",
                            "  <p>Hello there!</p>",
                            "</box>",
                            "<script>",
                            "  const box = document.querySelector('box');",
                            "  // Outputs '<p>Hello there!</p>':",
                            "  console.log(box.innerHTML)",
                            "  // Reassigns the value:",
                            "  box.innerHTML = '<p>Goodbye</p>'",
                            "</script>"
                        ]
                    },
                    {
                        "title": "The document Object",
                        "text": [
                            "The document object provides a Javascript interface to access the DOM. It can be used for a variety of purposes including referencing the <body> element, referencing a specific element with ID, creating new HTML elements, etc.",
                            "The given code block can be used to obtain the reference to the <body> element using the document object."
                        ],
                        "code": [
                            "const body = document.body;"
                        ]
                    },
                    {
                        "title": "The document.getElementById() Method",
                        "text": [
                            "The document.getElementById() method returns the element that has the id attribute with the specified value.",
                            "document.getElementById() returns null if no elements with the specified ID exists.",
                            "An ID should be unique within a page. However, if more than one element with the specified ID exists, the .getElementById() method returns the first element in the source code."
                        ],
                        "code": [
                            "// Save a reference to the element with id 'demo':",
                            "const demoElement = document.getElementById('demo');"
                        ]
                    },
                    {
                        "title": "The .querySelector() Method",
                        "text": [
                            "The .querySelector() method selects the first child/descendant element that matches its selector argument.",
                            "It can be invoked on the document object to search the entire document or on a single element instance to search that element’s descendants.",
                            "In the above code block, we are using .querySelector() to select the first div element on the page, and to select the first element with a class of button, inside the .main-navigation element."
                        ],
                        "code": [
                            "// Select the first <div>",
                            "const firstDiv = document.querySelector('div');",
                            "// Select the first .button element inside .main-navigation",
                            "const navMenu = document.getElementById('main-navigation');",
                            "const firstButtonChild = navMenu.querySelector('.button');"
                        ]
                    },
                    {
                        "title": "The document.body Object",
                        "text": [
                            "document.body returns a reference to the contents of the <body> HTML element of a document/HTML page. The <body> element contains all the visible contents of the page."
                        ]
                    },
                    {
                        "title": "The element.onclick Property",
                        "text": [
                            "The element.onclick property can be used to set a function to run when an element is clicked. For instance, the given code block will add an <li> element each time the element with ID addItem is clicked by the user."
                        ],
                        "code": [
                            "let element = document.getElementById('addItem');",
                            "element.onclick = function() {",
                            "  let newElement = document.createElement('li');",
                            "  document.getElementById('list').appendChild(newElement);",
                            "};"
                        ]
                    },
                    {
                        "title": "The element.appendChild() Method",
                        "text": [
                            "The element.appendChild() method appends an element as the last child of the parent.",
                            "In the given code block, a newly created <li> element will be appended as the last child of the HTML element with the ID list."
                        ],
                        "code": [
                            "var node1 = document.createElement('li');",
                            "document.getElementById('list').appendChild(node1);"
                        ]
                    },
                    {
                        "title": "The element.style Property",
                        "text": [
                            "The element.style property can be used to access or set the CSS style rules of an element. To do so, values are assigned to the attributes of element.style.",
                            "In the example code, blueElement contains the HTML element with the ID colorful-element. By setting the backgroundColor attribute of the style property to blue, the CSS property background-color becomes blue.",
                            "Also note that, if the CSS property contains a hyphen, such as font-family or background-color, Camel Case notation is used in Javascript for the attribute name, so background-color becomes backgroundColor.Also note that, if the CSS property contains a hyphen, such as font-family or background-color, Camel Case notation is used in Javascript for the attribute name, so background-color becomes backgroundColor."
                        ],
                        "code": [
                            "let blueElement = document.getElementById('colorful-element');",
                            "blueElement.style.backgroundColor = 'blue';"
                        ]
                    }
                ]
            },
            {
                "title": "DOM Events with JavaScript",
                "content": [
                    {
                        "title": ".addEventListener()",
                        "text": [
                            "The .addEventListener() method attaches an event handler to a specific event on an event target. The advantage of this is that you can add many events to the event target without overwriting existing events. Two arguments are passed to this method: an event name as a string, and the event handler function. Here is the syntax:"
                        ],
                        "code": [
                            "eventTarget.addEventListener('event', eventHandlerFunction);"
                        ]
                    },
                    {
                        "title": ".removeEventListener()",
                        "text": [
                            "We can tell our code to listen for an event to fire using the .addEventListener() method. To tell the code to stop listening for that event to fire, we can use the .removeEventListener() method. This method takes the same two arguments that were passed to .addEventListener(), the event name as a string and the event handler function. See their similarities in syntax:"
                        ],
                        "code": [
                            "eventTarget.addEventListener('event', eventHandlerFunction);",
                            "eventTarget.removeEventListener('event', eventHandlerFunction);"
                        ]
                    },
                    {
                        "title": "Event handler",
                        "text": [
                            "When an event fires in JavaScript (such as a keystroke or mouse movement), an event handler runs in response. Each event handler is registered to an element, connecting the handler to both an element and a type of event (keystroke, eg.). A method called an event listener “listens” for an event to occur, specifies what should happen as a response, and calls the event handler."
                        ]
                    },
                    {
                        "title": "Event object",
                        "text": [
                            "Event handler functions are passed an argument called an event object, which holds information about the event that was fired.",
                            "Event objects store information about the event target, the event type, and associated listeners in properties and methods. For example, if we wanted to know which key was pressed, the event object would store that information."
                        ]
                    },
                    {
                        "title": "Keyboard events",
                        "text": [
                            "Keyboard events describe a user interaction with the keyboard. Each event describes a separate interaction with a key on the keyboard by the user, which are then stored with the .key property.",
                            [
                                "keydown events are fired when the key is first pressed.",
                                "keyup events are fired when the key is released.",
                                "keypress events are fired when the user presses a key that produces a character value (aka is not a modifier key such as CapsLock)."
                            ]
                        ]
                    },
                    {
                        "title": "Keyboard events",
                        "text": [
                            "Keyboard events describe a user interaction with the keyboard. Each event describes a separate interaction with a key on the keyboard by the user, which are then stored with the .key property.",
                            [
                                "keydown events are fired when the key is first pressed.",
                                "keyup events are fired when the key is released.",
                                "keypress events are fired when the user presses a key that produces a character value (aka is not a modifier key such as CapsLock)."
                            ]
                        ]
                    },
                    {
                        "title": "javascript event",
                        "text": [
                            "On a webpage, a trigger such as a user interaction or browser manipulation can cause a client-side JavaScript event to be created. Events can be used to manipulate the DOM by executing a JavaScript function.",
                            "Events can include anything from a click to hovering a mouse over an element to a webpage loading or being refreshed. Events are defined as a part of the JavaScript API built into the web browser."
                        ],
                        "code": [
                            "// An event is triggered when a user clicks on the #button element,",
                            "// which then sets the #button element's background-color to blue. ",
                            "$('#button').on('click', event => {",
                            "  $(event.currentTarget).css('background-color', 'blue');  ",
                            "});"
                        ]
                    },
                    {
                        "title": "JS Event Handlers",
                        "text": [
                            "The goal of JavaScript is to make a page dynamic, which frequently means responding to certain events (for example, button clicks, user scrolls, etc). DOM elements can have functions hook onto events. The functions are called event handlers and the DOM element is known as an event target.The goal of JavaScript is to make a page dynamic, which frequently means responding to certain events (for example, button clicks, user scrolls, etc). DOM elements can have functions hook onto events. The functions are called event handlers and the DOM element is known as an event target.",
                            "The example code block shows how to register a function as an event handler. The property name for event handlers starts with ‘on’ with the event appended afterwards. Examples: onload, onclick, onfocus, onscroll."
                        ],
                        "code": [
                            "//Assuming there is an element with ID='test' on the page",
                            "document.getElementById('test').onclick = function(e) {",
                            "  alert('Element clicked!');",
                            "};"
                        ]
                    },
                    {
                        "title": "Mouse events",
                        "text": [
                            "A mouse event fires when a user interacts with the mouse, either by clicking or moving the mouse device.",
                            [
                                "click events are fired when the user presses and releases a mouse button on an element.",
                                "mouseout events are fired when the mouse leaves an element.",
                                "mouseover events are fired when the mouse enters an element’s content.",
                                "mousedown events are fired when the user presses a mouse button.",
                                "mouseup events are fired when the user releases the mouse button."
                            ]
                        ]
                    }
                ]
            },
            {
                "title": "HTML Forms",
                "content": [
                    {
                        "title": "<input>: Checkbox Type",
                        "text": [
                            "When using an HTML input element, the type='checkbox' attribute will render a single checkbox item. To create a group of checkboxes related to the same topic, they should all use the same name attribute. Since it’s a checkbox, multiple checkboxes can be selected for the same topic."
                        ],
                        "code": [
                            "<input type='checkbox' name='breakfast' value='bacon'>Bacon 🥓<br>",
                            "<input type='checkbox' name='breakfast' value='eggs'>Eggs 🍳<br>",
                            "<input type='checkbox' name='breakfast' value='pancakes'>Pancakes 🥞<br>"
                        ]
                    },
                    {
                        "title": "<textarea> Element",
                        "text": [
                            "The textarea element is used when creating a text-box for multi-line input (e.g. a comment section). The element supports the rows and cols attributes which determine the height and width, respectively, of the element.",
                            "When rendered by the browser, textarea fields can be stretched/shrunk in size by the user, but the rows and cols attributes determine the initial size.",
                            "Unlike the input element, the <textarea> element has both opening and closing tags. The value of the element is the content in between these tags (much like a <p> element). The code block shows a <textarea> of size 10x30 and with a name of 'comment'."
                        ],
                        "code": [
                            '<textarea rows="10" cols="30" name="comment"></textarea>'
                        ]
                    },
                    {
                        "title": "<form> Element",
                        "text": [
                            "The HTML <form> element is used to collect and send information to an external source.",
                            "<form> can contain various input elements. When a user submits the form, information in these input elements is passed to the source which is named in the action attribute of the form."
                        ],
                        "code": [
                            '<form method="post" action="http://server1">',
                            '  Enter your name:',
                            '  <input type="text" name="fname">',
                            '  <br/>',
                            '  Enter your age:',
                            '  <input type="text" name="age">',
                            '  <br/>',
                            '  <input type="submit" value="Submit">',
                            '</form>'
                        ]
                    },
                    {
                        "title": "<input>: Number Type",
                        "text": [
                            "HTML input elements can be of type number. These input fields allow the user to enter only numbers and a few special characters inside the field.",
                            "The example code block shows an input with a type of number and a name of balance. When the input field is a part of a form, the form will receive a key-value pair with the format: name: value after form submission.The example code block shows an input with a type of number and a name of balance. When the input field is a part of a form, the form will receive a key-value pair with the format: name: value after form submission."
                        ],
                        "code": [
                            '<input type="number" name="balance" /> '
                        ]
                    },
                    {
                        "title": "<input> Element",
                        "text": [
                            "The HTML <input> element is used to render a variety of input fields on a webpage including text fields, checkboxes, buttons, etc. <input> element have a type attribute that determines how it gets rendered to a page.",
                            "The example code block will create a text input field and a checkbox input field on a webpage."
                        ],
                        "code": [
                            '<label for="fname">First name:</label>',
                            '<input type="text" name="fname" id="fname"><br>',
                            '<input type="checkbox" name="vehicle" value="Bike"> I own a bike<input type="checkbox" name="vehicle" value="Bike"> I own a bike'
                        ]
                    },
                    {
                        "title": "<input>: Range Type",
                        "text": [
                            "A slider can be created by using the type='range' attribute on an HTML input element. The range slider will act as a selector between a minimum and a maximum value. These values are set using the min and max attributes respectively. The slider can be adjusted to move in different steps or increments using the step attribute.",
                            "The range slider is meant to act more as a visual widget to adjust between 2 values, where the relative position is important, but the precise value is not as important. An example of this can be adjusting the volume level of an application."
                        ],
                        "code": [
                            '<input type="range" name="movie-rating" min="0" max="10" step="0.1">'
                        ]
                    },
                    {
                        "title": "<select> Element",
                        "text": [
                            "The HTML <select> element can be used to create a dropdown list. A list of choices for the dropdown list can be created using one or more <option> elements. By default, only one <option> can be selected at a time.",
                            "The value of the selected <select>’s name and the <option>’ s value attribute are sent as a key-value pair when the form is submitted."
                        ],
                        "code": [
                            '<select name="rental-option">',
                            '  <option value="small">Small</option>',
                            '  <option value="family">Family Sedan</option>',
                            '  <option value="lux">Luxury</option>',
                            '</select>'
                        ]
                    },
                    {
                        "title": "Submitting a Form",
                        "text": [
                            "Once we have collected information in a form we can send that information somewhere else by using the action and method attribute. The action attribute tells the form to send the information. A URL is assigned that determines the recipient of the information. The method attribute tells the form what to do with that information once it’s sent. An HTTP verb is assigned to the method attribute that determines the action to be performed."
                        ],
                        "code": [
                            '<form action="/index3.html" method="PUT"></form>'
                        ]
                    },
                    {
                        "title": "<input>: Text Type",
                        "text": [
                            "HTML <input> elements can support text input by setting the attribute type='text'. This renders a single row input field that users can type text inside.",
                            "The value of the <input>‘s name and value attribute of the element are sent as a key-value pair when the form is submitted."
                        ],
                        "code": [
                            '<input type="text" name="username">'
                        ]
                    },
                    {
                        "title": "<datalist> Element",
                        "text": [
                            "When using an HTML input, a basic search/autocomplete functionality can be achieved by pairing an <input> with a <datalist>. To pair a <input> with a <datalist> the <input>’s list value must match the value of the id of the <datalist>. The datalist element is used to store a list of <option>s.",
                            "The list of data is shown as a dropdown on an input field when a user clicks on the input field. As the user starts typing, the list will be updated to show elements that best match what has been typed into the input field. The actual list items are specified as multiple option elements nested inside the datalist.",
                            "datalists are ideal when providing users a list of pre-defined options, but to also allow them to write alternative inputs as well."
                        ],
                        "code": [
                            '<input list="ide">',
                            '<datalist id="ide">',
                            '  <option value="Visual Studio Code" />',
                            '  <option value="Atom" />',
                            '  <option value="Sublime Text" />',
                            '</datalist>'
                        ]
                    },
                    {
                        "title": "<input>: Radio Button Type",
                        "text": [
                            "HTML <input> elements can be given a type='radio' attribute that renders a single radio button. Multiple radio buttons of a related topic are given the same name attribute value. Only a single option can be chosen from a group of radio buttons.",
                            "The value of the selected/checked <input>’s name and value attribute of this element are sent as a key-value pair when the form is submitted."
                        ],
                        "code": [
                            '<input name="delivery_option" type="radio" value="pickup" />',
                            '<input name="delivery_option" type="radio" value="delivery" />'
                        ]
                    },
                    {
                        "title": "Submittable Input",
                        "text": [
                            "HTML <input> elements can have a type attribute set to submit, by adding type='submit'. With this attribute included, a submit button will be rendered and, by default, will submit the <form> and execute its action.",
                            "The text of a submit button is set to Submit by default but can also be changed by modifying the value attribute."
                        ]
                    },
                    {
                        "title": "<input> name Attribute",
                        "text": [
                            "In order for a form to send data, it needs to be able to put it into key-value pairs. This is achieved by setting the name attribute of the input element. The name will become the key and the value of the input will become the value the form submits corresponding to the key.",
                            "It’s important to remember that the name is not the same as the ID in terms of form submission. The ID and the name of the input may be the same, but the value will only be submitted if the name attribute is specified.",
                            "In the code example, the first input will be submitted by the form, but the second one will not."
                        ],
                        "code": [
                            '<input name="username" id="username" />',
                            '<input id="address" />'
                        ]
                    },
                    {
                        "title": "<label> Element",
                        "text": [
                            "The HTML <label> element provides identification for a specific <input> based on matching values of the <input>‘s id attribute and the <label>‘s for attribute. By default, clicking on the <label> will focus the field of the related <input>.",
                            "The example code will create a text input field with the label text “Password: “ next to it. Clicking on “Password: “ on the page will focus the field for the related <input>."
                        ],

                        "code": [
                            '<label for="password ">Password:</label>',
                            '<input type="text" id="password" name="password">'
                        ]
                    },
                    {
                        "title": "<input> Password Type",
                        "text": [
                            "The HTML <input> element can have the attribute type='password' that renders a single row input field which allows the user to type censored text inside the field. It is used to type in sensitive information.",
                            "The value of this <input>’s name and value (actual value and not the censored version) attribute of this element are sent as a key-value pair when the form is submitted.",
                            "The code block shows an example of the fields for a basic login form - the username and password fields."
                        ],
                        "code": [
                            '<input type="text" name="username" />',
                            '<input type="password" name="password" />'
                        ]
                    },
                    {
                        "title": "required Attribute",
                        "text": [
                            "In HTML, input fields have an attribute called required which specifies that the field must include a value.",
                            "The example code block shows an input field that is required. The attribute can be written as required='true' or simply required."
                        ],
                        "code": [
                            '<input type="password" name="password" required >'
                        ]
                    },
                    {
                        "title": "max Attribute",
                        "text": [
                            "HTML <input>s of type number have an attribute called max that specifies the maximum value for the input field.",
                            "The code block shows an input number field that is set to have a maximum value of 20. Any value larger than 20 will mark the input field as having an error."
                        ],

                        "code": [
                            '<input type="number" max="20">'
                        ]
                    },
                    {
                        "title": "maxlength Attribute",
                        "text": [
                            "In HTML, input fields with type text have an attribute called maxlength that specifies the maximum number of characters that can be entered into the field. The code block shows an input text field that accepts text that has a maximum length of 140 characters."
                        ],
                        "code": [
                            '<input type="text" name="tweet" maxlength="140">'
                        ]
                    },
                    {
                        "title": "pattern Attribute",
                        "text": [
                            "In a text input element, the pattern attribute uses a regular expression to match against (or validate) the value of the <input>, when the form is submitted."
                        ],
                        "code": [
                            '<form action="/action_page.php">',
                            '  Country code: ',
                            '  <input type="text" name="country_code"',
                            '         pattern="[A-Za-z]{3}"',
                            '         title="Three letter country code">',
                            '  <input type="submit">',
                            '</form>'
                        ]
                    },
                    {
                        "title": "minlength Attribute",
                        "text": [
                            "In HTML, an input field of type text has an attribute that supports minimum length validation. To check that the input text has a minimum length, add the minlength attribute with the character count.",
                            "The example code block shows an example of a text field that has a minimum length of 6."
                        ],
                        "code": [
                            '<input type="text" name="username" minlength="6" />'
                        ]
                    },
                    {
                        "title": "HTML Form Validators",
                        "text": [
                            "HTML forms allow you to specify different kinds of validation for your input fields to make sure that data is entered correctly before being submitted. HTML supports a number of different validators, including things like minimum value, minimum/maximum length, etc. The validators are specified as attributes on the input field."
                        ]
                    },
                    {
                        "title": "min Attribute",
                        "text": [
                            "In HTML, input fields with type number have an attribute called min that specifies the minimum value that can be entered into the field. The code block provided shows an input number field that accepts a number with minimum value 1."
                        ],
                        "code": [
                            '<input type="number" name="rating" min="1" max="10">'
                        ]
                    }
                ]
            }
        ]
    },
    {
        "title": "JavaScript Syntax, Part 3",
        "content": [
            {
                "title": "Classes",
                "content": [
                    {
                        "title": "Static Methods",
                        "text": [
                            "Within a JavaScript class, the static keyword defines a static method for a class. Static methods are not called on individual instances of the class, but are called on the class itself. Therefore, they tend to be general (utility) methods."
                        ],
                        "code": [
                            "class Dog {",
                            "  constructor(name) {",
                            "    this._name = name;",
                            "  }",
                            "  introduce() { ",
                            "    console.log('This is ' + this._name + ' !');",
                            "  }",
                            "  // A static method",
                            "  static bark() {",
                            "    console.log('Woof!');",
                            "  }",
                            "}",
                            "const myDog = new Dog('Buster');",
                            "myDog.introduce();",
                            "// Calling the static method",
                            "Dog.bark();"
                        ]
                    },
                    {
                        "title": "Class",
                        "text": [
                            "JavaScript supports the concept of classes as a syntax for creating objects. Classes specify the shared properties and methods that objects produced from the class will have.",
                            "When an object is created based on the class, the new object is referred to as an instance of the class. New instances are created using the new keyword.",
                            "The code sample shows a class that represents a Song. A new object called mySong is created underneath and the .play() method on the class is called. The result would be the text Song playing! printed in the console."
                        ],
                        "code": [
                            "class Song {",
                            "  constructor() {",
                            "    this.title;",
                            "    this.author;",
                            "  }",
                            "  play() {",
                            "    console.log('Song playing!');",
                            "  }",
                            "}",
                            "const mySong = new Song();",
                            "mySong.play();"
                        ]
                    },
                    {
                        "title": "Class Constructor",
                        "text": [
                            "Classes can have a constructor method. This is a special method that is called when the object is created (instantiated). Constructor methods are usually used to set initial values for the object."
                        ],

                        "code": [
                            "class Song {",
                            "  constructor(title, artist) {",
                            "    this.title = title;",
                            "    this.artist = artist;",
                            "  }",
                            "}",
                            "const mySong = new Song('Bohemian Rhapsody', 'Queen');",
                            "console.log(mySong.title);"
                        ]
                    },
                    {
                        "title": "Class Methods",
                        "text": [
                            "Properties in objects are separated using commas. This is not the case when using the class syntax. Methods in classes do not have any separators between them."
                        ],
                        "code": [
                            "class Song {",
                            "  play() {",
                            "    console.log('Playing!');",
                            "  }",
                            "  stop() {",
                            "    console.log('Stopping!');",
                            "  }",
                            "}"
                        ]
                    },
                    {
                        "title": "extends",
                        "text": [
                            "JavaScript classes support the concept of inheritance — a child class can extend a parent class. This is accomplished by using the extends keyword as part of the class definition.",
                            "Child classes have access to all of the instance properties and methods of the parent class. They can add their own properties and methods in addition to those. A child class constructor calls the parent class constructor using the super() method."
                        ],
                        "code": [
                            "// Parent class",
                            "class Media {",
                            "  constructor(info) {",
                            "    this.publishDate = info.publishDate;",
                            "    this.name = info.name;",
                            "  }",
                            "}",
                            "// Child class",
                            "class Song extends Media {",
                            "  constructor(songData) {",
                            "    super(songData);",
                            "    this.artist = songData.artist;",
                            "  }",
                            "}",
                            "const mySong = new Song({",
                            "  artist: 'Queen',",
                            "  name: 'Bohemian Rhapsody',",
                            "  publishDate: 1975",
                            "});"
                        ]
                    },
                    {
                        "title": "Introduction to Design Patterns",
                        "text": [
                            [["link"], ["https://www.patterns.dev/posts/introduction/"]]
                        ]
                    },
                    {
                        "title": "Understanding Prototypes and Inheritance in JavaScript",
                        "text": [
                            [["link"], ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"]],
                            [["link"], ["https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript"]]
                        ]
                    },
                    {
                        "title": "Understanding Classes in JavaScript",
                        "text": [
                            [["link"], ["https://www.taniarascia.com/understanding-classes-in-javascript/"]]
                        ]
                    }
                ]
            },
            {
                "title": "Error Handling",
                "content": [
                    {
                        "title": "Runtime Error in JavaScript",
                        "text": [
                            "A JavaScript runtime error is an error that occurs within code while its being executed. Some runtime errors are built-in objects in JavaScript with a name and message property. Any code after a thrown runtime error will not be evaluated."
                        ]
                    },
                    {
                        "title": "The throw Keyword in JavaScript",
                        "text": [
                            "The JavaScript throw keyword is placed before an Error() function call or object in order to construct and raise an error. Once an error has been thrown, the program will stop running and any following code will not be executed."
                        ],
                        "code": [
                            "// The program will raise and output this Error object with message 'Something went wrong'",
                            "throw Error('Something went wrong');",
                            "//The program will stop running after an error has been raised, ",
                            "//and any following code will not be executed.",
                            "console.log('This will not be printed'); "
                        ]
                    },
                    {
                        "title": "Javascript Error Function",
                        "text": [
                            "The JavaScript Error() function creates an error object with a custom message. This function takes a string argument which becomes the value of the error’s message property. An error created with this function will not stop a program from running unless the throw keyword is used to raise the error."
                        ],
                        "code": [
                            "console.log(Error('Your password is too weak.')); //Error: Your password is too weak."
                        ]
                    },
                    {
                        "title": "javascript try catch",
                        "text": [
                            "A JavaScript try…catch statement can anticipate and handle thrown errors (both built-in errors as well as those constructed with Error()) while allowing a program to continue running. Code that may throw an error(s) when executed is written within the try block, and actions for handling these errors are written within the catch block."
                        ],
                        "code": [
                            "// A try...catch statement that throws a constructed Error()",
                            "try {",
                            "  throw Error('This constructed error will be caught');",
                            "} catch (e) {",
                            "console.log(e); // Prints the thrown Error object",
                            "}",
                            "// A try...catch statement that throws a built-in error",
                            "const fixedString = 'Cannot be reassigned';",
                            "try {",
                            "  fixedString = 'A new string'; // A TypeError will be thrown",
                            "} catch (e) {",
                            "  console.log('An error occurred!'); // Prints 'An error occurred!'",
                            "}",
                            "// Program continues running after the error is handled and prints 'Prints after error'",
                            "console.log('Prints after error'); // Program continues running after the error is handled and prints 'Prints after error'"
                        ]
                    }
                ]
            },
            {
                "title": "Module implementation",
                "content": [
                    {
                        "title": "Module implementation",
                        "text": [
                            "Before we dive in, it should be noted that there are multiple ways of implementing modules depending on the runtime environment in which your code is executed. In JavaScript, there are two runtime environments and each has a preferred module implementation:Before we dive in, it should be noted that there are multiple ways of implementing modules depending on the runtime environment in which your code is executed. In JavaScript, there are two runtime environments and each has a preferred module implementation:",
                            [
                                "The Node runtime environment and the module.exports and require() syntax.",
                                "The browser’s runtime environment and the ES6 import/export syntax."
                            ]
                        ]
                    },
                    {
                        "title": "ES6 Named Export Syntax",
                        "text": [
                            "the functions you wish to reuse can be exported using the named export syntax, Using this syntax, the name of each exported resource is listed between curly braces and separated by commas. Below, you can see how this is implemented in the new module file dom-functions.js:"
                        ],
                        "code": [
                            "/* dom-functions.js */",
                            "const toggleHiddenElement = (domElement) => {",
                            "    if (domElement.style.display === 'none') {",
                            "      domElement.style.display = 'block';",
                            "    } else {",
                            "      domElement.style.display = 'none';      domElement.style.display = 'none';",
                            "    }",
                            "}",
                            "const changeToFunkyColor = (domElement) => {",
                            "  const r = Math.random() * 255;",
                            "  const g = Math.random() * 255;",
                            "  const b = Math.random() * 255;",
                            "  domElement.style.background = `rgb(${r}, ${g}, ${b})`;",
                            "}",
                            "export { toggleHiddenElement, changeToFunkyColor };"
                        ]
                    },
                    {
                        "title": "ES6 Import Syntax",
                        "text": [
                            "In addition to the syntax above, in which all named exports are listed together, individual values may be exported as named exports by simply placing the export keyword in front of the variable’s declaration. Here is the same example using this syntax:"
                        ],
                        "code": [
                            "/* dom-functions.js */",
                            "export const toggleHiddenElement = (domElement) => {",
                            "  // logic omitted..",
                            "}",
                            "export const changeToFunkyColor = (domElement) => {",
                            "  // logic omitted...",
                            "}"
                        ]
                    },
                    {
                        "title": "ES6 Import Syntax",
                        "text": [
                            "The ES6 syntax for importing named resources from modules is similar to the export syntax. So the code for importing the modules would look like:"
                        ],
                        "code": [
                            "/* secret-messages.js */",
                            "import { toggleHiddenElement, changeToFunkyColor } from '../modules/dom-functions.js';",
                            "const buttonElement = document.getElementById('secret-button');",
                            "const pElement = document.getElementById('secret-p');",
                            "buttonElement.addEventListener('click', () => {",
                            "  toggleHiddenElement(pElement);",
                            "  changeToFunkyColor(buttonElement);",
                            "});"
                        ]
                    },
                    {
                        "title": "update html code",
                        "text": [
                            "Now, you must also update secret-messages.html. The change here is subtle, the only thing that changes is the addition of the attribute type='module' to the <script> element. Failure to do so can cause some browsers to throw an error. For example, in Chrome you might see this error:",
                            [["img"], ["../resources/images/es6-modules-chrome-error.webp"]]
                        ],
                        "code": [
                            "<!-- secret-messages.html -->",
                            "<html>",
                            "  <head>",
                            "    <title>Secret Messages</title>",
                            "  </head>",
                            "  <body>",
                            '    <button id="secret-button"> Press me... if you dare </button>',
                            '    <p id="secret-p" style="display: none"> Modules are fancy! </p>',
                            '    <script type="module" src="./secret-messages.js"> </script>',
                            "  </body>",
                            "</html>"
                        ]
                    },
                    {
                        "title": "renaming imports to avoid naming collisions",
                        "text": [
                            "Inevitably, you will run into a situation where the resources you wish to import share a name with some other value that already exists in your program (or from another imported module). ES6 includes syntax for renaming imported resources by adding in the keyword as. It looks like this:"
                        ],
                        "code": [
                            "/* main.js */",
                            "import { greet as greetEspanol } from 'greeterEspanol.js';",
                            "import { greet as greetFrancais } from 'greeterFrancais.js';",
                            "greetEspanol(); // Prints: hola",
                            "greetFrancais(); // Prints: bonjour"
                        ]
                    },
                    {
                        "title": "Default Exports",
                        "text": [
                            "So far, the examples shown have used the named export syntax, in which a module’s resources are exported individually by name. Every module also has the option to export a single value to represent the entire module called the default export. Often, though not always, the default export value is an object containing the entire set of functions and/or data values of a module.",
                            "With this syntax, the object containing the module’s resources is first declared and then is exported on the next line. At first glance, it looks like the resources object is being exported as a named export. However, the clause as default renames the exported object to default, a reserved identifier that can only be given to a single exported value."
                        ],
                        "code": [
                            "/* dom-functions.js */",
                            "const toggleHiddenElement = (domElement) => {",
                            "    if (domElement.style.display === 'none') {",
                            "      domElement.style.display = 'block';",
                            "    } else {",
                            "      domElement.style.display = 'none';",
                            "    }",
                            "}",
                            "const changeToFunkyColor = (domElement) => {",
                            "  const r = Math.random() * 255;",
                            "  const g = Math.random() * 255;",
                            "  const b = Math.random() * 255;",
                            "  domElement.style.background = `rgb(${r}, ${g}, ${b})`;",
                            "}",
                            "const resources = { ",
                            "  toggleHiddenElement, ",
                            "  changeToFunkyColor",
                            "}",
                            "export default resources;"
                        ]
                    },
                    {
                        "title": "Importing default values",
                        "text": [
                            "The syntax for importing default exports looks like this:"
                        ],
                        "code": [
                            "import domFunctions from '../modules/dom-functions.js';",
                            "const { toggleHiddenElement, changeToFunkyColor } = domFunctions;",
                            "const buttonElement = document.getElementById('secret-button');",
                            "const pElement = document.getElementById('secret-p');",
                            "buttonElement.addEventListener('click', () => {",
                            "  toggleHiddenElement(pElement);",
                            "  changeToFunkyColor(buttonElement);",
                            "});"
                        ]
                    },
                    {
                        "title": "Javacript modules MSN Documentation",
                        "text": [
                            [["link"], ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"]],
                        ]
                    },
                    {
                        "title": "CORS Issues",
                        "text": [
                            [["link"], ["https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"]],
                        ]
                    },
                    {
                        "title": "Creating local server with VSCode and the Live Server Extension",
                        "text": [
                            [["link"], ["https://www.codecademy.com/article/spinning-up-a-local-server"]]
                        ]
                    }
                ]
            }
        ]
    },
    {
        "title": "JavaScript Testing",
        "content": [
            {
                "title": "Write Good Tests witch Mocha",
                "content": [
                    {
                        "title": "initials Node.js Folder for managing packages for installing Mocha 1",
                        "text": [
                            "A JavaScript project is a directory of files. The following command creates a file package.json that can be used to manage packages for the project.",
                            "With your project setup, you can install packages.",
                            "npm install tells npm to install a package from the internet and any other packages it depends on mocha is the package you want to download",
                            "-D signifies that this package is a development dependency and will show up under the devDependecies section in package.json. This means that the package will only be included in development mode and will not be included in the production bundle."
                        ],
                        "code": [
                            "$ npm init",
                            "npm install mocha -D"
                        ]

                    },
                    {
                        "title": "new folders in the project",
                        "text": [
                            "Once you npm install packages, you can find the packages and all their dependencies in the node_modules folder. The ... in the file structure represents other packages that are a dependency for Mocha.",
                        ]

                    },
                    {
                        "title": "run mocha",
                        "text": [
                            "add a script to package.json. In the scripts object in package.json, set the value of 'test' to mocha. It should look like this:",
                            [["img"], ["../resources/images/Mocha_Javacript.PNG"]],
                            "Now you can call Mocha with the following command:",
                            [["img"], ["../resources/images/mocha_start.PNG"]]
                        ]
                    },
                    {
                        "title": "before() Hooks",
                        "text": [
                            "In a test file, the function before() will be executed first, regardless of it’s placement in the code block. before() is often used to set up code, like variables and values, for other function calls to use in their execution."
                        ],
                        "code": [
                            "before(() => {",
                            "   path = './message.txt';",
                            " });"
                        ]
                    },
                    {
                        "title": "beforeEach() Hooks",
                        "text": [
                            "In a test file, the function beforeEach() will be executed before each test. beforeEach() is often used to set up or reset code, like variables and values, for other function calls to use in their execution."
                        ],
                        "code": [
                            "beforeEach(() => {",
                            "   testCounter++;",
                            " });"
                        ]
                    },
                    {
                        "title": "after() Hooks",
                        "text": [
                            "In a test file, the function after() will be executed last, regardless of its placement in the code block. after() is often used to print out results from the tests that were run in the suite or to reset variables and values.",
                        ],
                        "code": [
                            "after(() => {",
                            '   console.log(""number of tests: "" + testCounter);',
                            "})"
                        ]
                    },
                    {
                        "title": "afterEach() Hooks",
                        "text": [
                            "In a test file, the function afterEach() will be executed after each test. afterEach() is often used to print out results from a particular test that was run in the suite or to reset variables and values."
                        ],
                        "code": [
                            "afterEach(() => {",
                            "   path = './message.txt';",
                            "});"
                        ]
                    },
                    {
                        "title": "Test Frameworks",
                        "text": [
                            "Test frameworks are used to organize and automate tests that provide useful feedback when errors occur."
                        ]
                    },
                    {
                        "title": "describe() functions",
                        "text": [
                            "In Mocha, the describe() function is used to group tests. It accepts a string to describe the group of tests and a callback function which contains it() tests. Calls to describe() are commonly nested to resemble the structure of the code being tested."
                        ],
                        "code": [
                            "describe('group of tests', () => {",
                            "  //Write it functions here",
                            "});"
                        ]
                    },
                    {
                        "title": "it() functions",
                        "text": [
                            "In Mocha, the it() function is used to execute individual tests. It accepts a string to describe the test and a callback function to execute assertions. Calls to it() are commonly nested within describe() blocks."
                        ],
                        "code": [
                            "describe('+', () => {",
                            "  it('returns the sum of its arguments', () => {",
                            "    // Write assertions here",
                            "  });",
                            "});"
                        ]
                    },
                    {
                        "title": "The assert Library",
                        "text": [
                            "The assert library is used to make assertions. It contains numerous functions that enable the tester to write easily readable assertions and throw AssertionErrors within a test."
                        ],
                        "code": [
                            "describe('+', () => {",
                            "  it('returns the sum of its arguments', () => {",
                            "    // Write assertion here",
                            "    assert.ok(3 + 4 === 7)",
                            "  });",
                            "});"
                        ]
                    },
                    {
                        "title": "assert.ok()",
                        "text": [
                            "The assert.ok() function is be used to evaluate a boolean expression within a test. If the expression evaluates to false, an AssertionError is thrown."
                        ],
                        "code": [
                            "describe('+', () => {",
                            "  it('returns the sum of its arguments', () => {",
                            "    // Write assertion here",
                            "    assert.ok(3 + 4 === 7)",
                            "  });",
                            "});"
                        ]
                    },
                    {
                        "title": "Setup Phase",
                        "text": [
                            "In testing, the Setup phase is where objects, variables, and set conditions that tests depend on are created."
                        ],
                        "code": [
                            "describe('.pop', () => {",
                            "  it('returns the last element in the array [3phase]', () => {",
                            "    // Setup",
                            "    const knightString = 'knight';",
                            "    const jediPath = ['padawan', knightString];",
                            "    // Exercise",
                            "    const popped = jediPath.pop();",
                            "    // Verify",
                            "    assert.ok(popped === knightString);",
                            "  });",
                            "});"
                        ]
                    },
                    {
                        "title": "Exercise Phase",
                        "text": [
                            "In testing, the Exercise phase is where the functionality under test is executed."
                        ],
                        "code": [
                            "describe('.pop', () => {",
                            "  it('returns the last element in the array [3phase]', () => {",
                            "    // Setup",
                            "    const knightString = 'knight';",
                            "    const jediPath = ['padawan', knightString];",
                            "    // Exercise",
                            "    const popped = jediPath.pop();",
                            "    // Verify",
                            "    assert.ok(popped === knightString);",
                            "  });",
                            "});"
                        ]
                    },
                    {
                        "title": "Verify Phase",
                        "text": [
                            "In testing, the Verify phase is where expectations are checked against the result of the exercise phase. assert would be used here."
                        ],
                        "code": [
                            "describe('.pop', () => {",
                            "  it('returns the last element in the array [3phase]', () => {",
                            "    // Setup",
                            "    const knightString = 'knight';",
                            "    const jediPath = ['padawan', knightString];",
                            "    // Exercise",
                            "    const popped = jediPath.pop();",
                            "    // Verify",
                            "    assert.ok(popped === knightString);",
                            "  });",
                            "});"
                        ]
                    },
                    {
                        "title": "Teardown Phase",
                        "text": [
                            "In testing, the Teardown phase is where the environment is reset before the next test runs. The teardown phase ensures that a test is isolated from other tests."
                        ],
                        "code": [
                            "it('creates a new file with a string of text', () => {",
                            "   // Setup",
                            "   path = './message.txt';",
                            "   str = '';",
                            "   // Exercise: write to file",
                            "   fs.appendFileSync(path, str);",
                            "   // Verify: compare file contents to string",
                            "   const contents = fs.readFileSync(path);",
                            "   assert.equal(contents.toString(), str);",
                            "   // Teardown: restore file",
                            "   fs.unlinkSync(path);",
                            " });"
                        ]
                    },
                    {
                        "title": "Tests in Isolation",
                        "text": [
                            "A project’s tests should run in isolation from one another. One test shouldn’t affect another. Tests should be able to run in any order."
                        ]
                    },
                    {
                        "title": "assert.equal()",
                        "text": [
                            "assert.equal() verifies a loose equality (==) comparison. Using assert.equal() is more expressive, it’s more clear that it’s verifying equality than assert.ok()."
                        ],
                        "code": [
                            "const landAnimals = ['giraffe', 'squirrel'];",
                            "const waterAnimals = ['shark', 'stingray'];",
                            "landAnimals.push('frog');",
                            "waterAnimals.push('frog');",
                            "assert.equal(landAnimals[2], waterAnimals[2]);"
                        ]
                    },
                    {
                        "title": "assert.strictEqual()",
                        "text": [
                            "assert.strictEqual() verifies a strict equality (===) comparison."
                        ],
                        "code": [
                            "const a = 3;",
                            "const b = '3';",
                            "assert.equal(a, b);",
                            "assert.strictEqual(a, b);"
                        ]
                    },
                    {
                        "title": "assert.deepEqual()",
                        "text": [
                            "assert.deepEqual() compares values within two objects. It will compare the values using loose (==) equality."
                        ],
                        "code": [
                            "const a = { relation: 'twin', age: '17' }; ",
                            "const b = {relation: 'twin', age: '17'};",
                            "assert.strictEqual(a, b);"
                        ]
                    },
                    {
                        "title": "Why Test?",
                        "text": [
                            "Testing can catch and identify issues with your implementation code before you deploy it to users"
                        ]
                    }
                ]
            }
        ]
    }
]

export default data;