package com.Pongdang_Server2.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController implements ErrorController {

    @RequestMapping({"/{path:[^\\.]*}"})
    public String redirect() {
        return "forward:/";
    }

    @RequestMapping({"/**/{path:^(?!.*\\.).*}"})
    public String deepRedirect() {
        return "forward:/";
    }
}