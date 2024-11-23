import { feature } from "./feature-model";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = generateDivs(getdata());

function generateDivs(dataList: feature[]): string {
    return dataList.map(data => {
      if (!data.title) {
        throw new Error("Each object in the data list must have a 'title' property.");
      }  
      const html = `<div id="${data.uniqueid}" class="clsdiv" >  
                    ${data.title}      
                    </div>`
      // Create a div with the title as its content
      return html;
    }).join("\n");
  }

function getdata() {
    const feature: feature[] =[{ title: 'fist div',uniqueid:'json'},{ title: 'second',uniqueid:'encoder'}]
    return feature;
}
