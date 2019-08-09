import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../../../components';

class SongList extends Component {
    render() {
        return (
            <Card>
              <CardSection>
                <Text>Songs be here</Text>
              </CardSection>
            </Card>
        );
    }
}

export default connect(null)(SongList);