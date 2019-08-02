import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';

class SongForm extends Component {
    render() {
        return (
            <Card>
              <CardSection>
                <Text>Create song</Text>
              </CardSection>
            </Card>
        );
    }
}

export default connect(null)(SongForm);