import { Controller, Get } from '@nestjs/common';
import log from 'logger-decorator'

@Controller('mapped')
export class MappedController {
    @Get()                                  // Mapped 'GET localhost:3000/mapped/'
    get() { 
        console.log('/mapped called')
        return '/mapped'
    }
    
    @Get('works')                           // Mapped 'GET localhost:3000/mapped/works'
    @log()
    workingLogger() { return '/mapped/works' }

    @log()                                  // POTENTIALLY, SOURCE OF THE ENTIRE PROBLEM
    @Get('fails')                           // Does not route 'GET localhost:3000/mapped/fails'
    unworkingRoute() { return '/mapped/fails' }
}
