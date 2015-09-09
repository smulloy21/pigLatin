describe('pigLatinify', function (){
  it('should add ay to the end of words that start with a vowel', function (){
    expect(pigLatinify('open')).to.equal('openay');
  });
  it('should piglatinify words starting with consonants', function (){
    expect(pigLatinify('truck')).to.equal('ucktray');
  });
  it('should piglatinify words starting with y', function (){
    expect(pigLatinify('yes')).to.equal('esyay');
  });
  it('should piglatinify words including with qu', function (){
    expect(pigLatinify('squeal')).to.equal('ealsquay');
  });
});

describe('pigLatinSentence', function(){
  it('should piglatinify every word in a sentence', function(){
    expect(pigLatinSentence('javascript is cool')).to.equal('avascriptjay isay oolcay');
  });
});
