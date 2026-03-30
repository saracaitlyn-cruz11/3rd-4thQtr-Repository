# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right

**ANSWER**: In relative position, what changes is how many pixels away from a respective position. For example, top: 20px moves the given container or text 20 pixels away from the top. Fixed position is in reference to the respective viewport's dimensions.


### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

**ANSWER**: The footer behaves differently from position relative since it is is declared as "fixed". Given that it is fixed in position, it won't move in position even when scrolling up/down the page. Essentially, compared to relative, relative moves relative to its position on screen, whilst staying fixed will not move it. It is in reference to the browser rather than the original spot.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?: 

**ANSWER**: Absolute position, is the closest element for its position. Unlike the fixed positioning, it moves away/to top, bottom, left, and right according to the elements around it. It is in reference to the nearest element or body.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

**ANSWER**: Z-index values determine the placement of the element on the page. The higher the z-index is, the higher "priority" for it to be placed on the screen. Essentially, it is the number/order for the stacking placement of the elements.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
    
    **ANSWER**: Once changed to relative, its reference for how many pixels away from top/bottom/left/right will be the closest element on screen. If it were changed to fixed, it looks similar to its position as absolute, only the fact that it stays exactly there when scrolling through the viewport.

    * What do you observe on about the effect of z-index on .notice and .content boxes?
    
   **ANSWER**: Z-index will determine the position relative to being on top/bottom of other elements on the viewport. Higher the z-index, its position on the screen becomes higher on top of the other elements.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)?

   **ANSWER**:
    In summary:
    - Relative: positions changes the position based on the viewport or website's flow; the reference point is the main viewport's dimensions itself
    - Absolute: positions changes the position based on the closest element or body visible or on the viewport
    - Fixed: stays in a specific spot regardless of scrolling past other elements
    - Static: the default setting; elements just follow the normal page flow

    b. How does absolute positioning depend on its parent element?

   **ANSWER**: As previously stated, absolute positioning relies on the nearest element.If a parent element is found, it uses that element as a reference for its position. If there are no parent elements on the viewport, it functions the same as a relative,where it positions itself relative to the body.

    c. How do you differentiate sticky from fixed (you can research on sticky)?

   **ANSWER**: Usingfixed removes the element entirely fromthe flow so that it stays at the specific spot on the screen at all times. Sticky, on the other hand, only appears to be fixed depending on a certain point within it parent container or element.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.

   **ANSWER**: For important information such as "Schedule" or "Primer" they should use a fixed position for students to constantly seen it on their viewports no matter how far they scroll down for the specific event details. Sticky position can be utilized for a header/navigation menu with other significant details of the school event like attire, venue, etc. These will only be seen whilst clicking on the "More Info" section. Lastly, I will use the absolute positioning for specific updates for events that need registration (such as workshops, talks, etc). With this, students can see immediately the status of a given activity they much register for quickly beside the respective element.
