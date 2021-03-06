// Generated by CoffeeScript 1.3.3
(function() {

  describe("Chaves", function() {
    return describe("when overriding options", function() {
      beforeEach(function() {
        window.msgs = [];
        window.alert = function(msg) {
          return msgs.push(msg);
        };
        loadFixtures('custom-list.html');
        this.list = $('#messages').chaves({
          className: 'keys',
          childSelector: '> div',
          activeClass: 'on',
          enableUpDown: true,
          bindings: [
            [
              'n', 'Alert n!', function() {
                return alert('You pressed n!');
              }
            ], [
              'p', 'Alert p!', function() {
                return alert('You pressed p!');
              }
            ]
          ]
        });
        this.children = this.list.children();
        this.help = $('.help');
        return this.search = $('#search');
      });
      afterEach(function() {
        key.deleteScope('all');
        $('.jquery-chaves-help').remove();
        return $('#list li').attr('class', '').eq('0').addClass('active');
      });
      it("adds 'keys' to target element's className", function() {
        return expect(this.list).toHaveClass('keys');
      });
      it("adds 'on' to first child div", function() {
        return expect(this.list.find('> div')).toHaveClass('on');
      });
      it("adds custom keys to help dialog", function() {
        expect($('.jquery-chaves-help dl').text()).toContain('nAlert n!');
        return expect($('.jquery-chaves-help dl').text()).toContain('pAlert p!');
      });
      describe("when j, k, down and up are pressed a bunch", function() {
        return it("moves 'on' from first to third div and back", function() {
          key.triggerKey('j');
          key.triggerKey('down');
          expect(this.children.eq(2)).toHaveClass('on');
          expect(this.children.eq(0)).not.toHaveClass('on');
          key.triggerKey('k');
          key.triggerKey('up');
          expect(this.children.eq(1)).not.toHaveClass('on');
          expect(this.children.eq(2)).not.toHaveClass('on');
          return expect(this.children.eq(0)).toHaveClass('on');
        });
      });
      return describe("when n or p are pressed", function() {
        return it("triggers the custom bindings", function() {
          key.triggerKey('n');
          expect(msgs).toContain('You pressed n!');
          key.triggerKey('p');
          return expect(msgs).toContain('You pressed p!');
        });
      });
    });
  });

}).call(this);
