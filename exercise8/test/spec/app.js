describe('Demo', function() {
    'use strict';

    // mock the demo module
    beforeEach(angular.mock.module('Demo'));

    // test capitalize filter
    it('everyOther should capitalize every other letter and add WDI BABY!!!', function() {
        inject(function(everyOtherFilter) {
            expect(everyOtherFilter('test')).not.toBe('test');
            expect(everyOtherFilter('test')).toBe("TeSt WDI BABY !!!!");
        });
    });
});
