const content = 'Swearem ipsum dolor sit bollocks, bloody adipiscing elit. shit scelerisque accumsan nisl, a mattis eros vestibulum et. Vestibulum placerat purus ut nibh aliquam shit. Aenean et tortor diam, id tempor elit. Vivamus sagittis ornare tempor. Nullam lacinia metus vel diam tempor et consequat ligula porttitor. Vestibulum mollis pellentesque hendrerit. Sed faucibus venenatis accumsan. Quisque ut gravida metus. Nam sed bloody magna, in bugger ligula. bugger a diam tincidunt odio semper consequat.Phasellus aliquam justo at arcu gravida porttitor. Duis interdum nisi vitae enim rutrum in viverra dui shit. Mauris id purus bollocks. Integer id poo sem. Nullam commodo mollis turpis eu ornare. Integer eu dolor urna. Curabitur twat amet nulla erat. Cumbubble id arcu nisl, ac semper diam. Nunc rhoncus ante enim. Donec at blandit nunc. Shag twat lectus augue, jizz amet ornare leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam eu eros dui. Curabitur in neque mauris, nec ornare turpis. Morbi porttitor, nisl et posuere fringilla, nulla orci congue ante, nec scelerisque minge sem at turpis. Cunt ornare mi eu magna feugiat id imperdiet purus fermentum. Wee leo dolor, aliquam et venenatis vitae, dignissim lobortis justo. Praesent molestie felis ultrices odio ultricies twathole. In cursus, nisl vitae elementum scelerisque, nibh urna cursus nisi, eget volutpat erat arcu sed ipsum.Proin bollocks nunc nec massa scelerisque sodales nec non velit. Vestibulum auctor sagittis scelerisque. Morbi sed lorem et odio sagittis pretium euismod sed augue. Ut non bastard purus. Integer tempus hendrerit erat feugiat auctor. Aliquam convallis imperdiet nunc nec feugiat. In hac habitasse platea dictumst. Vestibulum vehicula bibendum arcu, id accumsan tellus egestas nec. Ut vehicula dignissim adipiscing. Nullam id magna vel nunc sodales laoreet. Aenean sit amet tellus metus, non mattis dui.Donec eleifend nisi in metus convallis sollicitudin venenatis urna pharetra. Nunc cumbubble nisi rhoncus lectus porta pellentesque. Mauris ullamcorper, turpis at vulputate vehicula, arcu libero commodo elit, sit amet rhoncus mauris sem non enim. Nulla iaculis sollicitudin mollis. Aliquam commodo, orci rutrum tristique sagittis, nulla elit lacinia arcu, at dictum damn choad cumbubble lacus. Bastard nec metus mi, eget ullamcorper neque. In hac habitasse platea dictumst. Sed tempus sagittis magna, vel tristique nibh consequat vitae. In id wee sit amet diam commodo fermentum. Etiam pretium bloodymary sed erat ultricies tempus. Minge ut lacus urna, ac rutrum turpis. Aenean vehicula, dolor non thundercunt volutpat, diam diam wee enim, quis placerat erat purus nec enim. Morbi et dolor nisi, jizz faucibus sapien. Suspendisse potenti. Proin semper sodales nunc, id venenatis justo condimentum non.Suspendisse potenti. Donec scelerisque sodales fringilla. Class aptent wee sociosqu choad litora torquent per conubia nostra, per inceptos himenaeos. Ut tristique vehicula felis, at pellentesque velit fermentum sit amet. Praesent lacinia faucibus justo, sit amet rhoncus lectus posuere eu. Aenean faucibus est bloody nulla pharetra faucibus. Integer interdum fermentum bugger, shag lobortis nisl auctor ac. Cras tincidunt egestas mattis. Phasellus lorem risus, adipiscing id luctus ut, hendrerit nec leo. Morbi ac neque nunc, in dapibus lorem. Pellentesque sit amet bollocks dui, quis imperdiet turpis. Suspendisse et tortor est. Donec ante enim, dapibus piss molestie a, consequat vitae nulla. Donec ac mi odio, ut porttitor quam. Sed turpis wee, blandit ut tincidunt vel, tempus a nulla. Quisque dictum diam vel libero euismod pretium hendrerit elit pulvinar. Sed et odio quis velit viverra faucibus eget at nisl. Donec bloody amet dolor quis odio sodales vestibulum.';
const offensiveWords = ['bollocks', 'bloody', 'bugger', 'shit', 'damn', 'bastard', 'shag', 'choad', 'piss'];
let counter = 0;
// const result = familyFriendlizer(content, offensiveWords); 
function familyFriendlizer(ctt, off) {
  let split = ctt.toLowerCase().split(' ');
  let ctt2 = split.join();
  console.log(split);
  for (let i = 0; i < split.length; i++) {
    for (let c = 0; c < off.length; c++) {
      if (split[i] === off[c]) {
        split[i] = '';
        counter += 1;
      }
      if (split[i] === off[c] + '.') {
        split[i] = '.';
        counter += 1;
      }
      if (split[i] === off[c] + ',') {
        split[i] = ',';
        counter += 1;
      }
    }
  }
  console.log(split.join(' '));
  console.log(counter);
}
// console.log(result);
familyFriendlizer(content, offensiveWords);
