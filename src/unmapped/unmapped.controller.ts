import { Controller, Get } from '@nestjs/common';
import log from 'logger-decorator'

@Controller('unmapped')             // @<HTTPMethod> decorated methods within this controller should map the routes '/unmapped/...'
                                        // This class still gets recognized as a Controller, seeing as RoutesResolver prints it on startup
                                        // The class is recognized whether @log is above or below it, unlike the methods
@log()                              // Will not work, either above or below the @Controller decorator
export class UnmappedController {
    @Get()          // Should map 'GET localhost:3000/unrouted/', but the entire controller does not work
                    // This is probably due to the @log()'s class decorator getting the methods having already been decorated by @<HTTPMethod>
    get() { 
        console.log('/unmapped called')
        return '/unmapped'
    }
}
