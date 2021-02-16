import { AuthGuard } from './auth.guard';

describe('Service: AuthGuard', () => {
    let service: AuthGuard;
    let authServiceMock: any;
    let routerMock: any;

    beforeEach(() => {
        authServiceMock = {
            isLoggedIn: jest.fn()
        };
        routerMock = {
            navigate: jest.fn()
        };

        service = new AuthGuard(
            authServiceMock,
            routerMock,
        );
    });

    describe('Test: canActivate', () => {
        it('should return true', () => {
            jest.spyOn(service, 'checkLoggedIn').mockReturnValue(true);
            expect(service.checkLoggedIn()).toBe(true);
        });

        it('should return false', () => {
            jest.spyOn(service, 'checkLoggedIn').mockReturnValue(false);
            expect(service.checkLoggedIn()).toBe(false);
        });
    });

    describe('Test: checkLoggedIn', () => {
        it('should return true if isLoggedIn() is true', () => {
            jest.spyOn(authServiceMock, 'isLoggedIn').mockReturnValue(true);
            expect(authServiceMock.isLoggedIn()).toBe(true);
            expect(service.checkLoggedIn()).toBe(true);
        });

        it('should return false if isLoggedIn() is false', () => {
            jest.spyOn(authServiceMock, 'isLoggedIn').mockReturnValue(false);
            expect(authServiceMock.isLoggedIn()).toBe(false);
            expect(routerMock.navigate).toBeDefined();
            expect(service.checkLoggedIn()).toBe(false);
        });
    });

});
